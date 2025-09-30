import express, {Request, Response} from 'express';
import { PrismaClient } from '@prisma/client';
import { validateRegister } from './middleware/middleware';

const app = express();
const prisma = new PrismaClient();
const PORT = 3000;

app.use(express.json());

app.post('/users/register', validateRegister, async (req: Request, res: Response) => {
  try {
    const { email, name, password } = req.body;
    const user = await prisma.user.create({
      data: { email, name, passwordHash },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: `${error}` });
  }
});

app.get('/', (req, res) => {
  res.send('<h1>Testing run</h1>')
});

app.listen(PORT, () => {
  console.log(`Server is running at localhost:${PORT}`);
});
