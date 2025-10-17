const mysql = require('mysql2/promise');
require('dotenv').config();
const fs = require('fs');
const path = require('path');

async function initDB() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: process.env.DB_USERNAME, 
      password: process.env.DB_PASSWORD,
      multipleStatements: true
    });

    await connection.query('DROP DATABASE modulebdb');

    await connection.query('CREATE DATABASE IF NOT EXISTS modulebdb');
    await connection.query('USE modulebdb');

    console.log('Database created or already exists');

    await connection.query(`
      CREATE TABLE IF NOT EXISTS Users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        password VARCHAR(100)
      )`);

    await connection.query(`
      INSERT INTO Users (name, password)
      VALUES
        ('user1', '${process.env.USER1_PASSWORD}'),
        ('user2', '${process.env.USER2_PASSWORD}'),
        ('${process.env.ADMIN_LOGIN}', '${process.env.ADMIN_PASSWORD}')
      `);

    const dumpPath = path.join(__dirname, 'db.sql');
    const dumpSQL = fs.readFileSync(dumpPath, 'utf8');

    await connection.query(dumpSQL);
    console.log('Dump imported');

    await connection.end();

    return mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'modulebdb',
    });

  } catch (error) {
    console.error('Error creating database: ', error),
      process.exit(1);
  }
}

module.exports = initDB()
