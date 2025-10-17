const initDB = require('./db')
const express = require('express')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient;

const app = express();
const router = express.Router();
app.use('/v1', router)
app.use(express.json());

(async () => {
  await initDB;
  
  app.get('/', async(_req, res) => {
    try {
      const users = await prisma.Users.findMany();
      res.json(users)
    } catch (error) {
      console.error(error);
      res.status(500).send('Error querying users');
    }
  });

  router.post('/auth/login', async(req, res) => {
    try {
      const { name, password } = req.body;
      const newLogin = await prisma.Users.find({
        where: { name, password }
      })

      if(!newLogin) throw new Error("Invalid login or password")
    } catch (error) {
      if(error instanceof Error) {
        res.status(400).json(error.message)
      }
    }
  })
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})();
