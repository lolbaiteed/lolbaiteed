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
    if (authHeader) {
      const token = authHeader.split(' ');
      const [rows]= await db.query(`SELECT * FROM Users WHERE token = ?`, [token[1]])
      req.user = rows[0];
      next();
    } else {
      return res.status(401).json({ message: "Unauthorized user" })
    }
  } catch (error) {
    res.status(500).json({
      message: `${error}`
    })
  }
}

async function checkRole (req, res, next) {
  const user = req.user;
  try {
    console.log(user)
    if (user.role === 'admin') {
      next();
    } else {
      return res.status(401).json({ message: "Unauthorized user" }) }
  } catch (error) {
    
  }
}

router.get('/place', checkToken ,async (_req, res) => {
  try {
    const places = await db.query('SELECT * FROM places');
    res.status(200).json(places[0]);
  } catch (error) {
    res.status(500).json(error);
  }
})

router.get('/place/:id', checkToken ,async (req, res) => {
  const id = req.params.id;
  try {
    const place = await db.query('SELECT * FROM places WHERE id = ?', [id]);
    res.status(200).json(place[0]);
  } catch (error) {
    res.status(500).json(error);
  }
})

router.post('/auth/login', async (req, res) => {
  try {
    const { name, password } = req.body;

    const [rows] = await db.query(`SELECT password FROM Users WHERE name = ?`,[name]);

    const findPassword = rows.find(item => item.password === `${password}`);

    if(!findPassword) {
      throw new Error('Invalid login');
    }

    const shasum = crypto.createHash(`sha1`);
    shasum.update(name, password);
    const token = shasum.digest('hex');
    await db.query(`UPDATE Users SET token = ? WHERE name = ?`, [token, name]);
    const findRole = await db.query(`SELECT role FROM Users WHERE name = ?`, [name]);
    const role = findRole[0].pop().role

    res.status(200).json({
      token: token,
      role: role
    }) 
  } catch (error) {
    if(error instanceof Error) {
      res.status(401).json({
        message: error.message,
      })
    } else {
      res.status(500).json({ message: "Internal server error" })
    }
  }
})

router.post('/auth/logout', checkToken, async (req, res) => {
  const user = req.user
  try {
    await db.query('UPDATE Users SET token = NULL WHERE token LIKE ?', [user.token]) 
    res.status(200).json({ message: "logged out " });
  } catch (error) {
    if(error instanceof Error) {
      res.status(400).json({
        message: error.message
      })
    }
  }
})

router.post('/place', checkToken, checkRole, async(req, res) => {
  // const { id, name, type,
  //         lantiude, longitude,
  //         image, open_time,
  //         close_time, description } = req.body;
  try {

    const lastId = await db.query('SELECT MAX(id) FROM places');
    console.log(lastId[0])

    // const place = db.query(`INSERT INTO places (id, name, lantiude, longitude, x, y, type, image_path, open_time, close_time, description)
    //   VALUES
    //   ()`)

    res.status(200).json({ message: "ture" })
  } catch (error) {
    res.status(500).json({ message: "false" })
  }
})

app.listen(3000, () => {
  console.log('started');
})
