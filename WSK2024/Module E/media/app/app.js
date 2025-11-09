import express from 'express';
import { db, showCategory, showPoolId } from './db.js';
import { __dirname, dbError, safeInsert } from './utils.js'
import { validateToken, adminLogin, checkIsAdminLoggedIn } from './middleware.js';
import path from 'path';

const app = express();
const router = express.Router()

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use("/api", router);

router.post("/admin/login", adminLogin, async (_req, res) => {
  try {
    res.json("logged in")
  } catch (error) {
    if (error instanceof Error) {
      res.status(401).json(error.message);
    }
  }
})

router.post('/admin', validateToken, checkIsAdminLoggedIn, async (req, res) => {
  try {
    const username = await db.query(`SELECT username FROM User WHERE token = ?`, [req.token])
    const topics = await db.query(`SELECT * FROM Topics`)
    return res.status(200).json([topics[0], username[0]])
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.stack)
    } else {
      console.log(error)
    }
  }
})

router.post("/admin/topics/create", validateToken, checkIsAdminLoggedIn, async (req, res) => {
  const data = req.body;
  try {
    await db.query(`INSERT INTO Topics (name) VALUES (?)`, [data.name])
    const topicId = await db.query(`SELECT id as last_id FROM Topics ORDER BY id DESC LIMIT 1`)
    res.set('X-TopicId', `${topicId[0][0].last_id}`)
    res.status(201).json({ message: "Created" })
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
})

router.post("/admin/polls/create", validateToken, checkIsAdminLoggedIn, async (req, res) => {
  const topicId = req.headers['x-topicid']
  try {
    await db.query(`INSERT INTO Polls (topicId) VALUES (?)`, [topicId])
    const pollId = await db.query(`SELECT id as last_id FROM Polls ORDER BY id DESC LIMIT 1`)
    res.set('X-PollId', `${pollId[0][0].last_id}`)
    res.status(201).json({ message: "created" })
  } catch (error) {
    res.status(400).json({ message: "Bad request" })
  }
})

router.post("/admin/questions/create", validateToken, checkIsAdminLoggedIn, async (req, res) => {
  const data = req.body;
  const pollId = req.headers['x-pollid']
  try {
    await db.query(`INSERT INTO Questions (question_text, pollId) VALUES (?,?)`, [data.name, pollId])
    const questionId = await db.query(`SELECT id as last_id FROM Questions ORDER BY id DESC LIMIT 1`)
    res.set("X-QuestionId", `${questionId[0][0].last_id}`)
    res.status(201).json({ message: "created" })
  } catch (error) {
    res.status(400).json({ message: "Bad request" })
  }
})

router.post("/admin/answers/create", validateToken, checkIsAdminLoggedIn, async (req, res) => {
  const data = req.data
  const questionId = req.headers['x-questionid']
  try {
    await db.query(`INSERT INTO Answers (answer_text, questionId) VALUES (?,?)`, [data.name, questionId])
    res.status(201).json({ message: "created" })
  } catch (error) {
    res.status(400).json({ message: "Bad request" })
  }
})

//TODO: add delete and update routes
router.post("/admin/topic/edit", async (req, res) => {
  const data = req.body;
  try {
    console.log(data.id)
    for (const key in data) {
      switch (key) {
        case "add":
          await safeInsert(data.add);
          break;
        case "del":
          console.log(data.del);
          break;
        case "upd":
          console.log(data.upd);
      }
    }
    res.status(200).json({ message: "done" });
  } catch (error) {
    res.status(400).json(error.message)
  }
})

router.post('/admin/logout', validateToken, checkIsAdminLoggedIn, async (req, res) => {
  const token = req.token;
  try {
    await db.query('UPDATE User SET token = NULL WHERE token = ?', [token])
    res.status(200).json({ message: "logged out" })
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json(error.message)
    }
  }
})

router.get('/', async (_req, res) => {
  try {
    const topics = await showCategory()
    const pollIds = await showPoolId()
    res.status(200).json([topics[0], pollIds[0]])
  } catch (error) {
    if (error instanceof Error) {
      res.status(422).json(error.message)
    }
  }
})

router.post('/poll/:pollId', async (req, res) => {
  const pollId = req.params.pollId;
  try {
    const questions = await db.query(`SELECT * FROM Questions WHERE pollId = ?`, [pollId]);
    if (questions.length === 0) {
      throw new dbError(`Questions from poll with id: ${pollId} not found`)
    }
    let answers;
    const result = [];
    for (let i = 0; i < questions[0].length; i++) {
      answers = await db.query(`SELECT * FROM Answers WHERE questionId = ?`, [questions[0][i].id])
      if (answers.length === 0) {
        throw new dbError(`Answers with questionId: ${questions[0][i].id} not found`)
      }
      result.push({
        question: questions[0][i].question_text,
        answers: answers[0].map((item) => {
          return item.answer_text;
        })
      })
    }
    res.status(200).json(result);
  } catch (error) {
    if (error instanceof dbError) {
      res.status(404).json(error.message)
    }
  }
})

router.post("/polls/submit", async (req, res) => {
  try {
    const data = req.body;
    await db.query(`INSERT INTO Results (userAgent, pollId, answers, ip)
    VALUES(?,?,?,INET6_ATON(?))`, [data[1]['User-Agent'], data[3].pollId, JSON.stringify(data[0].answers), req.ip])
    res.status(200).json({ message: "submited" })
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json(error.message, error.stack)
    }
  }
})

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "views", "base.html"))
})

app.get('/poll{/*path}', (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "views", "base.html"))
})

app.get('/admin{/*path}', (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "views", "base.html"))
})

app.listen(3000, () => {
  console.log('started');
})
