import mysql from 'mysql2/promise' 
import {hashPasswd} from './utils.js'

export const db = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'moduleedb',
  user: 'root',
  password: 'root' 
})

db.query(`CREATE TABLE IF NOT EXISTS User (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(191) DEFAULT NULL,
  password varchar(191) DEFAULT NULL,
  token varchar(191) DEFAULT NULL,
  PRIMARY KEY(id))`
);

db.query(`CREATE TABLE IF NOT EXISTS Topics (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(191) DEFAULT NULL,
  PRIMARY KEY(id))`
)

const username = 'admin';
const password = hashPasswd('toor');

const topics = ["Привычки использования социальных сетей", "Окружающая среда и экология", "Предпочтения в еде", "Путешествия и отдых", "Спортивные увлечения", "Работа и карьера", "Образ жизни и здоровье", "Технологии и гаджеты", "Финансовые привычки и сбережения", "Культура и предпочтения в искусстве"]

setTimeout(() => {
  db.query(`INSERT INTO User (username, password)
    SELECT * FROM (
      SELECT '${username}' as username, '${password}' as password
      ) as tmp
    WHERE NOT EXISTS (SELECT 1 FROM User)`)

  db.query(`INSERT INTO Topics (name)
    SELECT * FROM (
      SELECT '${topics[0]}' as name
      UNION ALL
      SELECT '${topics[1]}' 
      UNION ALL
      SELECT '${topics[2]}' 
      UNION ALL
      SELECT '${topics[3]}'
      UNION ALL
      SELECT '${topics[4]}' 
      UNION ALL
      SELECT '${topics[5]}'
      UNION ALL
      SELECT '${topics[6]}' 
      UNION ALL
      SELECT '${topics[7]}'
      UNION ALL
      SELECT '${topics[8]}' 
    ) as tmp
    WHERE NOT EXISTS (SELECT 1 FROM Topics);`)
}, 1000);

export function showCategory() {
  return db.query(`SELECT * FROM Topics`);
}

