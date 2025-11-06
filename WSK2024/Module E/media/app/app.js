import express from 'express';
import { db, showCategory, showPoolId } from './db.js';
import { verifyPasswd, generateToken, __dirname } from './utils.js'
import path from 'path';

const app = express();
const router = express.Router()

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use("/api", router);

async function validateToken(req, _res, next) {
  const authHeader = req.headers['authorization'];
  if (authHeader === undefined) {
    throw new Error("token must be set")
  }
  if (!authHeader.startsWith("Bearer ")) {
    throw new Error("Not valid token");
  }
  req.token = authHeader.split(" ")[1];
  next();
}

async function adminLogin(req, res, next) {
  const authHeader = req.headers['authorization'];
  try {
    if (authHeader != undefined) {
      validateToken(req, res, next)
      const tokenFound = await db.query(`SELECT username FROM User WHERE token = ?`, [req.token])
      if (!tokenFound) {
        throw new Error("User with this token not found");
      }
      next();
    } else {
      const { username, password } = req.body;
      if (password === undefined || username === undefined) {
        return res.redirect("/admin/login")
      }
      const [rows] = await db.query(`SELECT password FROM User WHERE username = ?`, [username]);
      const storedPassword = rows[0].password;
      const passMatch = verifyPasswd(password, storedPassword)
      if (!passMatch) {
        throw new Error("Invalid password");
      }
      const token = generateToken();

      await db.query(`UPDATE User SET token = ? WHERE username = ?`, [token, username])
      res.set('Authorization', `Bearer ${token}`)
      next();
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(401).json(error.message);
    }
  }
}

async function checkIsAdminLoggedIn(req, res, next) {
  try {
    const [isLoggedIn] = await db.query(`SELECT username FROM User WHERE token = ?`, [req.token])
    if (!isLoggedIn || isLoggedIn.length === 0) {
      return res.redirect("/admin/login")
    }
    next()
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}

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
    console.log(username[0][0])
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

router.post('/admin/logout', validateToken, async (req, res) => {
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
  const questions = await db.query(`SELECT * FROM Questions WHERE pollId = ?`, [pollId]);
  let answers;
  const result = [];
  for (let i = 0; i < questions[0].length; i++) {
    answers = await db.query(`SELECT * FROM Answers WHERE questionId = ?`, [questions[0][i].id])
    result.push({
      question: questions[0][i].question_text,
      answers: answers[0].map((item) => {
        return item.answer_text;
      })
    })
  }
  res.status(200).json(result);
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
