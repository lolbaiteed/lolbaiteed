import express from 'express';
import {db, showCategory} from './db.js';
import {verifyPasswd, generateToken, __dirname} from './utils.js'
import path from 'path';

const app = express();
const router = express.Router()

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use("/api", router);

async function validateToken(req, _res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader.startsWith("Bearer ")) {
    throw new Error("Not valid token");
  } 
  req.token = authHeader.split(" ")[1];
  next();
}

async function adminLogin(req, res, next) {
  const {username, password} = req.body;
  try {
    const [rows] = await db.query(`SELECT password FROM User WHERE username = ?`, [username]);
    const storedPassword = rows[0].password; 
    const passMatch = verifyPasswd(password, storedPassword)
    if(!passMatch) {
      throw new Error("Invalid password");
    }
    const token = generateToken();

    await db.query(`UPDATE User SET token = ? WHERE username = ?`, [token, username])
    res.set('Token', token)
    next();
  } catch (error) {
    if(error instanceof Error) {
      res.status(401).json(error.message);
    }
  }
}

router.post('/admin', adminLogin, async (_req, res) => {
  try {
    const topics = await showCategory()
    res.status(200).json(topics[0]);
  } catch (error) {
    res.json(error)
  }
})

router.post('/admin/logout',validateToken ,async(req, res) => {
  const token = req.token;
  try {
    await db.query('UPDATE User SET token = NULL WHERE token = ?', [token])
    res.status(200).json({ message: "logged out" })
  } catch (error) {
    if(error instanceof Error){
      res.status(400).json(error.message)
    }
  }
})

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "views", "base.html"))
})

app.get('/admin', (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "views", "base.html"))
})

app.listen(3000, () => {
  console.log('started');
})
