import {randomBytes, scryptSync, timingSafeEqual} from 'crypto';
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

  while(!created) {
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
 
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);
