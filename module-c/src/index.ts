import express, {Request, Response} from 'express';
import { PrismaClient } from '@prisma/client';
import { validateRegister, validateLogin, verifyPasswd, generateToken, hashPasswd } from './middleware/middleware';
import { LoginInput, RegisterInput } from 'schemas';

const app = express();
const prisma = new PrismaClient();
const PORT = 3000;


app.use(express.json());

app.post('/users/register', validateRegister, async (req: Request, res: Response) => {
  try {
    const { email, name, password } = req.body as RegisterInput;
    const passwordHash = hashPasswd(password)
    const user = await prisma.user.create({
      data: { email, name, passwordHash },
    });
    res.status(201).json({
      status: "Registrated successfuly",
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        credits: user.credits
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server error" });
  }
});

app.post('/users/login', validateLogin, async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body as LoginInput;
    const user = await prisma.user.findUnique({
      where: {email: email}
    })

    if (!user) return res.status(401).json({ message: "Invalid email/password" });

    const validatePasswdHash = verifyPasswd(password, user.passwordHash)
    if (!validatePasswdHash) return res.status(401).json({ message: "Invalid email/password" });

    const token = generateToken();

    await prisma.userToken.create({
      data: { token, userId: user.id}
    })

    res.status(200).json({
      status: "Login successful",
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        credits: user.credits,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ error: `Internal Server error` })
  }
}) 

app.post('/users/logout', async (req: Request, res: Response) => {
  const authHeader = req.headers['authorization'];
  try {
    if (!authHeader || !authHeader.startsWith("Bearer ")) return res.status(401).json({ status: "Invalid token type" })
    const token = authHeader.split(" ")[1];

    const findToken = await prisma.userToken.findUnique({
      where: { token: token }
    })

    if (!findToken) return res.status(401).json({ status: "token not found" })

    await prisma.userToken.update({
      where: {token: token},
      data: { revokedAt: new Date() }
    })
    res.status(200).json({ status: "Logged out successfuly" })
  } catch (error) {
    res.status(500).json({ message: `${error}` })
  } 
})  

app.get('/', (req, res) => {
  res.send('<h1>Testing run</h1>')
});

app.listen(PORT, () => {
  console.log(`Server is running at localhost:${PORT}`);
});
