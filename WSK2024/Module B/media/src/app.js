const crypto = require('crypto');
const express = require('express');
const db = require('./db.js');
const app = express();
const router = express.Router();

app.use(express.json());
app.use('/v1', router);

async function checkToken (req, res, next) {
  try {
    const authHeader = req.headers['authorization']

    if(!authHeader) next();

    const token = authHeader.split(' ');

    const findToken = db.query(`SELECT * FROM Users WHERE token LIKE '%${token[1]}%'`)

    if(!findToken) {
      res.status(401).json({ message: "invalid or expired token" })
    }

    next();
  } catch (error) {
    res.status(500).json({
      error
    })
  }
}

router.get('/places', checkToken ,async (_req, res) => {
  try {
    const places = await db.query('SELECT * FROM places');
    res.status(200).json(places);
  } catch (error) {
    res.status(500).json(error);
  }
})

router.post('/auth/login', async (req, res) => {
  try {
    const { name, password } = req.body;

    const [rows] = await db.query(`SELECT password FROM Users WHERE name LIKE '%${name}%'`);

    const findPassword = rows.find(item => item.password === `${password}`);

    console.log(findPassword);

    if(!findPassword) {
      throw new Error('Invalid login');
    }

    const shasum = crypto.createHash(`sha1`);
    shasum.update(name, password);
    const token = shasum.digest('hex');
    await db.query(`UPDATE Users SET token = '${token}' WHERE name LIKE '%${name}%'`);
    const findRole = await db.query(`SELECT role FROM Users WHERE name LIKE '%${name}%'`);
    const role = findRole[0].pop().role
    console.log(role);

    res.status(200).json({
      token: token,
      role: role
    }) 
  } catch (error) {
    if(error instanceof Error) {
      res.status(401).json({
        message: error.message,
        error: error.name,
        stack: error.stack
      })
    } else {
      res.status(500).json({ message: "Internal server error" })
    }
  }
})

app.listen(3000, () => {
  console.log('started');
})
