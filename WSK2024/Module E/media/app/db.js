import mysql from 'mysql2/promise' 
import {hashPasswd} from './utils.js'

export const db = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  database: 'moduleedb',
  password: 'root' 
})

db.query(`CREATE DATABASE IF NOT EXISTS moduleedb`)

db.query(`CREATE TABLE IF NOT EXISTS User (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(191) DEFAULT NULL,
  password varchar(191) DEFAULT NULL,
  token varchar(191) DEFAULT NULL,
  PRIMARY KEY(id))`
);

db.query(`CREATE TABLE IF NOT EXISTS Topics (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(191) DEFAULT NULL
  )`
)

db.query(`CREATE TABLE IF NOT EXISTS Polls (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  topicId int NOT NULL,
  FOREIGN KEY (topicId) REFERENCES Topics(id)
)`)

db.query(`CREATE TABLE IF NOT EXISTS Questions (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  question_text varchar(191) NOT NULL,
  pollId int NOT NULL,
  FOREIGN KEY (pollId) REFERENCES Polls(id)
)`)

db.query(`CREATE TABLE IF NOT EXISTS Answers (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  questionId int NOT NULL,
  answer_text varchar(191) NOT NULL,
  FOREIGN KEY (questionId) REFERENCES Questions(id)
)`)

db.query(`CREATE TABLE IF NOT EXISTS ShortLinks (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  pollId int NOT NULL, 
  code varchar(8) UNIQUE NOT NULL,
  url varchar(191) NOT NULL,
  FOREIGN KEY (pollId) REFERENCES Polls(id)
)`)

const username = 'admin';
const password = hashPasswd('toor');

const topics = ["Привычки использования социальных сетей", "Окружающая среда и экология", "Предпочтения в еде", "Путешествия и отдых", "Спортивные увлечения", "Работа и карьера", "Образ жизни и здоровье", "Технологии и гаджеты", "Финансовые привычки и сбережения", "Культура и предпочтения в искусстве"]

const poll1Answers = [
  ["Ежедневнo", "Несколько раз в неделю", "Раз в неделю", "Реже одного раза в неделю"],
  ["Общение с друзьями и семьей", "Чтение новостей", "Развлечения", "Работа и обучение"],
  ["Instagram", "Facebook", "TikTok", "Twitter"],
  ["Менее 1 часа", "1-2 часа", "3-5 часов", "Более 5 часов"],
  ["Положительно", "Нейтрально", "Отрицательно", "Не замечаю ее"]
]

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

  db.query(`INSERT INTO Polls (topicId)
    SELECT * FROM (
      SELECT 1 as topicId 
      UNION ALL
      SELECT 2 
      UNION ALL
      SELECT 3 
    ) as tmp
    WHERE NOT EXISTS (SELECT 1 FROM Polls)`)

  db.query(`INSERT INTO Questions (question_text, pollId)
    SELECT * FROM (
      SELECT 'Как часто вы заходите в социальные сети?' as question_text, 1 as pollId 
      UNION ALL
      SELECT 'Для чего вы чаще всего используете социальные сети?', 1
      UNION ALL
      SELECT 'Какие из социальных сетей вы используете?' as question_text, 1 as pollId 
      UNION ALL
      SELECT 'Сколько времени в день вы проводите в социальных сетях?' as question_text, 1 as pollId 
      UNION ALL
      SELECT 'Как вы относитесь к рекламе в социальных сетях?' as question_text, 1 as pollId 
    ) as tmp
    WHERE NOT EXISTS (SELECT 1 FROM Questions);`)

  db.query(`INSERT INTO Answers (answer_text, questionId)
    SELECT * FROM (
      SELECT '${poll1Answers[0][0]}' as answer_text, 1 as questionId 
      UNION ALL
      SELECT '${poll1Answers[0][1]}' as answer_text, 1 as questionId 
      UNION ALL
      SELECT '${poll1Answers[0][2]}' as answer_text, 1 as questionId
      UNION ALL
      SELECT '${poll1Answers[0][3]}' as answer_text, 1 as questionId
      UNION ALL
      SELECT '${poll1Answers[1][0]}' as answer_text, 2 as questionId
      UNION ALL
      SELECT '${poll1Answers[1][1]}' as answer_text, 2 as questionId
      UNION ALL
      SELECT '${poll1Answers[1][2]}' as answer_text, 2 as questionId
      UNION ALL
      SELECT '${poll1Answers[1][3]}' as answer_text, 2 as questionId
      UNION ALL
      SELECT '${poll1Answers[1][3]}' as answer_text, 2 as questionId
      UNION ALL
      SELECT '${poll1Answers[2][0]}' as answer_text, 3 as questionId
      UNION ALL
      SELECT '${poll1Answers[2][1]}' as answer_text, 3 as questionId
      UNION ALL
      SELECT '${poll1Answers[2][2]}' as answer_text, 3 as questionId
      UNION ALL
      SELECT '${poll1Answers[2][3]}' as answer_text, 3 as questionId
      UNION ALL
      SELECT '${poll1Answers[3][0]}' as answer_text, 4 as questionId
      UNION ALL
      SELECT '${poll1Answers[3][1]}' as answer_text, 4 as questionId
      UNION ALL
      SELECT '${poll1Answers[3][2]}' as answer_text, 4 as questionId
      UNION ALL
      SELECT '${poll1Answers[3][3]}' as answer_text, 4 as questionId
      UNION ALL
      SELECT '${poll1Answers[4][0]}' as answer_text, 5 as questionId 
      UNION ALL
      SELECT '${poll1Answers[4][1]}' as answer_text, 5 as questionId
      UNION ALL
      SELECT '${poll1Answers[4][2]}' as answer_text, 5 as questionId
      UNION ALL
      SELECT '${poll1Answers[4][3]}' as answer_text, 5 as questionId
    ) as tmp
    WHERE NOT EXISTS (SELECT 1 FROM Answers);`)
}, 1000);

export function showCategory() {
  return db.query(`SELECT * FROM Topics`);
}

export function showPoolId() {
  return db.query(`SELECT id FROM Polls`)
}

