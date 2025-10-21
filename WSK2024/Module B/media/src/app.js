const crypto = require('crypto');
const express = require('express');
const db = require('./db.js');
const { PoiFactory } = require('./poi.js');
const app = express();
const router = express.Router();

app.use(express.json());
app.use('/v1', router);

async function checkToken(req, res, next) {
  try {
    const authHeader = req.headers['authorization']
    if (authHeader) {
      const token = authHeader.split(' ');
      const [rows] = await db.query(`SELECT * FROM Users WHERE token = ?`, [token[1]])
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

async function checkRole(req, res, next) {
  const user = req.user;
  try {
    if (user.role === 'admin') {
      next();
    } else {
      return res.status(401).json({ message: "Unauthorized user" })
    }
  } catch (error) {

  }
}

class PlaceParams {
  constructor({ name, type, latitude, longitude, image_path, open_time, close_time, description } = {}) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.type = type;
    this.image_path = image_path;
    this.open_time = open_time;
    this.close_time = close_time;
    this.description = description;
  }

  toObject() {
    const valid = {};

    for (const [key, value] of Object.entries(this)) {
      if (value !== undefined && value !== null && value !== '') {
        valid[key] = value;
      }
    }

    return valid;
  }

  clcPos() {
    if (this.latitude === null && this.longitude === null) {
      throw new Error('latitude and longitude must be set');
    }

    const factory = new PoiFactory;

    const target = { latitude: this.latitude, longitude: this.longitude };
    const pos = factory.calculate(target);
    return pos;
  }
}

class ScheduleParams {
  constructor({ line, from_place_id, to_place_id, departure_time, arrival_time, distance, speed } = {}) {
    this.line = line;
    this.from_place_id = from_place_id;
    this.to_place_id = to_place_id;
    this.departure_time = departure_time;
    this.arrival_time = arrival_time;
    this.distance = distance;
    this.speed = speed;
  }

  toMinutes(time) {
    const [hrs, mins] = time.split(':').map(Number);
    return hrs * 60 + mins; 
  }

  toObject() {
    const valid = {};

    for (const [key, value] of Object.entries(this)) {
      if (value !== undefined && value !== null && value !== '') {
        valid[key] = value;
      }
    }

    return valid;
  }
}

router.get('/place', checkToken, async (_req, res) => {
  try {
    const places = await db.query('SELECT * FROM places');
    res.status(200).json(places[0]);
  } catch (error) {
    res.status(500).json(error);
  }
})

router.get('/place/:id', checkToken, async (req, res) => {
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

    const [rows] = await db.query(`SELECT password FROM Users WHERE name = ?`, [name]);

    const findPassword = rows.find(item => item.password === `${password}`);

    if (!findPassword) {
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
    if (error instanceof Error) {
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
    if (error instanceof Error) {
      res.status(400).json({
        message: error.message
      })
    }
  }
})

router.post('/place', checkToken, checkRole, async (req, res) => {
  try {
    const newPlace = new PlaceParams(req.body);

    const [rows] = await db.query('SELECT MAX(id) FROM places');
    const lastId = rows[0]['MAX(id)'];

    const pos = newPlace.clcPos();

    const params = { ...newPlace, id: lastId + 1, x: pos.x, y: pos.y }

    await db.query('INSERT INTO places SET ?', [params])

    res.status(200).json({ message: "create success" })
  } catch (error) {
    res.status(422).json({ messae: "Data cannot be processed" })
  }
})

router.patch('/place/:id', checkToken, checkRole, async (req, res) => {
  const id = req.params.id;
  try {
    const params = new PlaceParams(req.body);

    await db.query('UPDATE places SET ? WHERE id = ?', [params.toObject(), id])

    res.status(200).json({ message: "update success" })
  } catch (error) {
    res.status(422).json({ message: "Data cannot be updated" })
  }
})

router.delete('/place/:id', checkToken, checkRole, async (req, res) => {
  const id = req.params.id;
  try {
    await db.query('DELETE FROM places WHERE id = ?', [id])

    res.status(200).json({ message: "delete success" })
  } catch (error) {
    res.status(500).json({ message: "Internal server error" })
  }
})

router.get('/schedule', checkToken, checkRole, async (_req, res) => {
  try {
    const schedules = await db.query('SELECT * FROM schedules');
    res.status(200).json(schedules[0]);
  } catch (error) {
    res.status(500).json(error);
  }
})

router.post('/schedule', checkToken, checkRole, async (req, res) => {
  try {
    const newSchedule = new ScheduleParams(req.body);

    if (newSchedule.toMinutes(newSchedule.departure_time) > newSchedule.toMinutes(newSchedule.arrival_time)) {
      throw new Error('arrival_time must be after departue_time');
    }

    if (newSchedule.toMinutes(newSchedule.departure_time) < newSchedule.toMinutes('08:30') && newSchedule.toMinutes(newSchedule.arrival_time)< newSchedule.toMinutes('08:30')) {
      throw new Error('arrival_time and departue_time cannot be before 08:30')
    }

    const [rows] = await db.query('SELECT MAX(id) FROM schedules');
    const lastId = rows[0]['MAX(id)'];
    
    const params = { ...newSchedule, id: lastId + 1 };

    await db.query('INSERT INTO schedules SET ?', [params])

    res.status(200).json({ message: "create success" })
  } catch (error) {
    res.status(422).json({ message: "Data cannot be processed" })
  }
})

router.patch('/schedule/:id', checkToken, checkRole, async (req, res) => {
  const id = req.params.id;
  try {
    const params = new ScheduleParams(req.body);

    await db.query('UPDATE schedules SET ? WHERE id = ?', [params.toObject(), id])

    res.status(200).json({ message: "update success" })
  } catch (error) {
    res.status(400).json({ message: "Data cannot be updated" })
  }
})

router.delete('/schedule/:id', checkToken, checkRole, async (req, res) => {
  const id = req.params.id;
  try {
    await db.query('DELETE FROM schedules WHERE id = ?', [id])

    res.status(200).json({ message: "delete success" })
  } catch (error) {
    res.status(500).json({ message: "Internal server error" })
  }
})

app.listen(3000, () => {
  console.log('started');
})
