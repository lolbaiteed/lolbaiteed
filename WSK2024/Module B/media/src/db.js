const mysql = require('mysql2/promise');
const db = mysql.createPool({
  host: 'localhost',
  database: 'modulebdb',
  user: 'root',
  password: 'root',
  port: 3306,
});

db.query(`CREATE TABLE IF NOT EXISTS Users (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(191) DEFAULT NULL,
  password varchar(191) NOT NULL,
  token varchar(191) DEFAULT NULL,
  role varchar(191) DEFAULT NULL,
  PRIMARY KEY (id))`
);

setTimeout(() => {
  db.query(`
    INSERT INTO Users (name, password, role)
    SELECT * FROM (
      SELECT 'user1' AS name, 'user1pass' AS password, 'user' AS role
      UNION ALL
      SELECT 'user2', 'user2pass', 'user'
      UNION ALL
      SELECT 'admin', 'adminpass', 'admin'
    ) AS tmp
    WHERE NOT EXISTS (SELECT 1 FROM Users);
  `);
}, 1000);

module.exports = db;
