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

db.query(`INSERT INTO Users (name, password, role)
  VALUES 
  ('user1', 'user1pass', 'user'),
  ('user2', 'user2pass', 'user'),
  ('admin', 'adminpass', 'admin')
  ON DUPLICATE KEY UPDATE name = VALUES(name), password = VALUES(password), role = VALUES(role)
`);  


module.exports = db;

