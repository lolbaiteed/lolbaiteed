import express from 'express';
import {db, showCategory} from './db.js';
import {verifyPasswd} from './utils.js'

const app = express();
const router = express.Router()

app.use(express.json())
app.use(router);

async function adminLogin(req, res, next) {
  const {username, password} = req.body;
  try {
    const [rows] = await db.query(`SELECT password FROM User WHERE username = ?`, [username]);
    const storedPassword = rows[0].password; 
    const passMatch = verifyPasswd(password, storedPassword)
    if(!passMatch) {
      throw new Error("Invalid password");
    }
    next();
  } catch (error) {
    if(error instanceof Error) {
      res.status(401).json(error.message);
    }
  }
}

router.get('/admin', adminLogin, async (_req, res) => {
  try {
    const topics = await showCategory()
   res.status(200).json(topics[0]) 
  } catch (error) {
    if (error instanceof Error) {
      res.json(error.message)
    }
  }
})

app.listen(3000, () => {
  console.log('started');
})
