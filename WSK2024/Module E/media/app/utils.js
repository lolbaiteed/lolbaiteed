import { randomBytes, scryptSync, timingSafeEqual } from 'crypto';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { db } from './db.js';

export function hashPasswd(passwd) {
  const salt = randomBytes(16).toString('hex');
  const hash = scryptSync(passwd, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

export function verifyPasswd(passwd, stored) {
  const [salt, hash] = stored?.split(":");
  const newHash = scryptSync(passwd, salt, 64).toString('hex');
  return timingSafeEqual(Buffer.from(hash, "hex"), Buffer.from(newHash, "hex"));
}

export function generateToken() {
  const token = randomBytes(16).toString('hex');
  return token
}

export function generateLink() {
  const link = randomBytes(4).toString('hex');
  return link
}

export async function createShortLink(pollid) {
  let shortUrl;
  let created = false;

  while (!created) {
    const code = generateLink();
    shortUrl = "http://localhost:3000/" + code;
    console.log(pollid)

    try {
      await db.query(`INSERT INTO ShortLinks (pollId, code, url) VALUES (?, ?, ?)`,
        [pollid, code, shortUrl]);
      created = true;
    } catch (error) {
      if (error.code === "ER_DUP_ENTRY") {
        console.warn(`${code} is in use, regenerating`);
      } else {
        throw error;
      }
    }
  }

  return shortUrl;
}

export class dbError extends Error {
  constructor(message) {
    super(message);
    this.name = "dbError"
  }
}

export class validationError extends Error {
  constructor(message) {
    super(message);
    this.name = "validationError"
  }
}

/**
 *@param {Object} json - must have this structure:
  @example 
    {
      "id": 1,
      "add": {
        "location": "User",
        "fields": "id,username",
        "values": "2,bob"
      },
    }
    @throws {dbError}
 */
export async function safeInsert(json) {
  const requestTable = json.location;
  const data = json;
  const tables = await db.query(`SHOW TABLES`);
  const tableExists = tables[0].some(t => t.Tables_in_moduleedb === requestTable);

  if (!tableExists)
    throw new dbError(`table ${requestTable} is not found`);

  const columns = await db.query(`SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ?`, [requestTable])
  let sqlFields = [];

  data.fields.split(",").forEach(element => {
    const columnExists = columns[0].some(c => c.COLUMN_NAME === element)
    if (!columnExists)
      throw new dbError(`table ${requestTable} does not have field: ${element}`);
    sqlFields.push(element)
  });

  const valueCounter = data.fields.split(',').map(() => "?").join(",");
  const queryBase = `INSERT INTO ${requestTable} (${sqlFields}) VALUES(${valueCounter})`

  await db.query(queryBase, data.values.split(','))
}

export async function safeDelete(json) {
  const id = json.id;
  const requestTable = json.location;
  const tables = await db.query(`SHOW TABLES`);
  const tableExists = tables[0].some(t => t.Tables_in_moduleedb === requestTable);
  const idFound = await db.query(`SELECT * FROM ${requestTable} WHERE id = ?`, [id]);

  if (!tableExists)
    throw new dbError(`table ${requestTable} is not found`);

  if (idFound.length === 0)
    throw new dbError(`table ${requestTable} not have row with id: ${id}`);

  await db.query(`DELETE FROM ${requestTable} WHERE id = ?`, [id]);
}

export async function safeUpdate(json) {
  const requestTable = json.location;
  const id = json.id;
  const data = json;
  const tables = await db.query(`SHOW TABLES`);
  const tableExists = tables[0].some(t => t.Tables_in_moduleedb === requestTable);

  if (!tableExists)
    throw new dbError(`table ${requestTable} is not found`);

  const columns = await db.query(`SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ?`, [requestTable])
  let sqlFields = [];

  data.fields.split(",").forEach(element => {
    const columnExists = columns[0].some(c => c.COLUMN_NAME === element)
    if (!columnExists)
      throw new dbError(`table ${requestTable} does not have field: ${element}`);
    sqlFields.push(element)
  });

  const updateFields = sqlFields.map(field => `${field} = ?`).join(', ');
  const queryBase = `UPDATE ${requestTable} SET ${updateFields} WHERE id = ?`;

  await db.query(queryBase, [...data.values.split(","), id])
}

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);
