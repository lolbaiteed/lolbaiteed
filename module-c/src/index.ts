import express, {Request, Response} from 'express';
import { PrismaClient } from '@prisma/client';
import { validateRegister, validateLogin, verifyPasswd, generateToken, hashPasswd, checkToken } from './middleware/middleware';
import { LoginInput, RegisterInput } from 'schemas';

const app = express();
const router = express.Router();
const prisma = new PrismaClient();
const PORT = 3000;

app.use(express.json());
app.use("/api/v1", router);

router.post('/users/register', validateRegister, async (req: Request, res: Response) => {
  try {
    const { email, name, password } = req.body as RegisterInput;
    const passwordHash = hashPasswd(password)
    const user = await prisma.user.create({
      data: { email, name, passwordHash, updatedAt: new Date() },
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
    res.status(500).json({ error: `${error}` });
  }
});

router.post('/users/login', validateLogin, async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body as LoginInput;
    const user = await prisma.user.findUnique({
      where: {email: email}
    })

    if (!user) return res.status(401).json({ message: "Invalid email/password" });

    const validatePasswdHash = verifyPasswd(password, user.passwordHash)
    if (!validatePasswdHash) return res.status(401).json({ message: "Invalid email/password" });

    const token = generateToken();

    await prisma.usertoken.create({
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

router.post('/users/logout', checkToken, async (req: Request, res: Response) => {
  const token = (req as any).token;
  try {
    await prisma.usertoken.update({
      where: {token: token},
      data: { revokedAt: new Date() }
    })
    res.status(200).json({ status: "Logged out successfuly" })
  } catch (error) {
    res.status(500).json({ message: `${error}` })
  } 
})  

router.get('/users/me', checkToken, async (req: Request, res: Response) => {
  const userId = (req as any).userId;  
  try {
    const findUser = await prisma.user.findUnique({
      where: { id: userId }
    })

    if (!findUser) return res.status(400).json({ message: "user not found"})

    res.status(200).json({
     message: {
        id: findUser.id,
        email: findUser.email,
        name: findUser.name,
        credits: findUser.credits
     } 
    })
  } catch (error) {
    res.status(500).json({ message: "Internal Server error"})
  }
})

router.post('/users/me/credits', checkToken, async (req: Request, res: Response) => {
  const userId = (req as any).userId;
  const amount = Number(req.body.amount);
  try {
    const findUser = await prisma.user.findUnique({
      where: { id: userId }
    })

    if(!findUser) return res.status(400).json({ message: "user not found" })


    if( !Number.isFinite(amount) || amount <= 0) return res.status(400).json({ messsage: "Invalid amount" })

    const newCreditsAmount = await prisma.user.update({
      where: {id: userId},
      data: { credits: { increment: amount}, }
      
    })

    await prisma.wallettransaction.create({
      data: {
        userId: userId,
        credits: amount,
        machineUsageId: null
      }
    })
    
    res.status(200).json({ message: "Credits added successfuly", credits: newCreditsAmount.credits})

  } catch (error) {
    res.status(500).json({ message: `${error}` })
  }
})

router.get('/machines', async (req: Request, res: Response) => {
  try {
    
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
