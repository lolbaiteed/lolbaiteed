import express, {Request, Response} from 'express';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import { randomBytes } from 'crypto';
import { validateRegister } from './middleware/validateRegister';

const app = express();
const prisma = new PrismaClient();
const PORT = 3000;


app.use(express.json());

const createUserSchema = z.object({
  email: z.email({ message: "invalid email address" }),
  name: z.string().min(1, { message: "name cannot be empty" }),
  // passwordHash: z.string(),
});


function generatePasswdHash() {
  return randomBytes(32).toString('hex');
}

// id          
// email       
// name        
// passwordHash
// credits     
// createdAt   
// updatedAt   

app.post('/users', validateRegister, async (req: Request, res: Response) => {
  try {
    const { email, name } = req.body;
    const passwordHash = generatePasswdHash();
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
