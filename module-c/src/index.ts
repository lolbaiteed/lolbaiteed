import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { validateUser } from './middleware/validate';

const app = express();

const prisma = new PrismaClient();

app.use(express.json());

app.post('/users', validateUser, async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const user = await prisma.user.create({
      data: { name, email },
    });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create user' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
