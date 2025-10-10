import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { validateRegister, validateLogin, verifyPasswd, generateToken, hashPasswd, checkToken, validateMachine } from './middleware/middleware';
import { LoginInput, RegisterInput, addMachineSchema, setProgramInput } from 'schemas';
import { tr } from 'zod/locales';

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
      message: "Registrated successfuly",
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
      where: { email: email }
    })

    if (!user) return res.status(401).json({ message: "Invalid email/password" });

    const validatePasswdHash = verifyPasswd(password, user.passwordHash)
    if (!validatePasswdHash) return res.status(401).json({ message: "Invalid email/password" });

    const token = generateToken();

    await prisma.userToken.create({
      data: { token, userId: user.id }
    })

    res.status(200).json({
      message: "Login successful",
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
  if(!token) throw new Error("Cannot fetch token after validate")
  try {
    await prisma.userToken.update({
      where: { token: token },
      data: { revokedAt: new Date() }
    })
    res.status(200).json({ message: "Logged out successfuly" })
  } catch (error) {
    if(error instanceof Error) {
      res.status(500).json({
        message: error.message
      })
    }
  }
})

router.get('/users/me', checkToken, async (req: Request, res: Response) => {
  const userId = (req as any).userId;
  try {
    const findUser = await prisma.user.findUnique({
      where: { id: userId }
    })

    if (!findUser) return res.status(400).json({ message: "user not found" })

    res.status(200).json({
      message: {
        id: findUser.id,
        email: findUser.email,
        name: findUser.name,
        credits: findUser.credits
      }
    })
  } catch (error) {
    res.status(500).json({ message: "Internal Server error" })
  }
})

router.post('/users/me/credits', checkToken, async (req: Request, res: Response) => {
  const userId = (req as any).userId;
  const amount = Number(req.body.amount);
  const machineUsageId = req.body.machineUsageId || null;

  try {
    const findUser = await prisma.user.findUnique({
      where: { id: userId }
    })

    if (!findUser) return res.status(400).json({ message: "user not found" })

    if(machineUsageId === null){
      if (!Number.isFinite(amount) || amount <= 0) return res.status(400).json({ messsage: "Invalid amount" })

      const newCreditsAmount = await prisma.user.update({
        where: { id: userId },
        data: { credits: { increment: amount }, }
      })

      await prisma.walletTransaction.create({
        data: {
          userId: userId,
          credits: amount,
          machineUsageId: machineUsageId 
        }
      })

      res.status(200).json({ message: "Credits added successfuly", credits: newCreditsAmount.credits })
    } else {

      const userCurrentCredits = findUser.credits;
      if(userCurrentCredits === null || userCurrentCredits < amount) return res.status(400).json({ message: "You don't have enough credits for that operation" }) 

      const newCreditsAmount = await prisma.user.update({
        where: { id: userId },
        data: { credits: { decrement: amount }, }
      })

      await prisma.walletTransaction.create({
        data: {
          userId: userId,
          credits: amount,
          machineUsageId: machineUsageId 
        }
      })

      res.status(200).json({
        message: "Transaction successful",
        credits: newCreditsAmount.credits
      })
    }

  } catch (error) {
    res.status(500).json({ message: `${error}` })
  }
})
           
router.post('/machine/add', validateMachine, async (req: Request, res: Response) => {
  try {
    const { id, url, name, locationX, locationY } = req.body as addMachineSchema;
    const machine = await prisma.machine.create({
      data: { id, url, name, locationX, locationY }
    });

    res.status(201).json({
      message: "machine created",
      machine: {
        id: machine.id,
        url: machine.url,
        name: machine.name,
        locationX: machine.locationX,
        locationY: machine.locationY,
      }
    });

  } catch (error) {
    res.status(500).json({ message: `${error}` })
  }
})

router.post('/machine/:id/update', checkToken, async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { name, locationX, locationY } = req.body as addMachineSchema;
    const machineFound = await prisma.machine.findFirst({ where: { id: id } })

    if (!machineFound) return res.status(404).json({ message: "Machine not found" });

    const updatedData = await prisma.machine.update({
      where: { id: id },
      data: { name: name, locationX: locationX, locationY: locationY }
    })
    res.status(200).json({ message: "Machine data updated successfuly", updatedData })
  } catch (error) {
    res.status(500).json({ message: "Internal Server error" })
  }
})

router.get('/machine/:id', checkToken, async (req: Request, res: Response) => {
  const id = req.params.id;
  const url = `http://${id}:4000/getInfo`;
  try {
    const resp = await fetch(url, {
      method: "GET",
      headers: {"Content-Type": "application/json"},
    });

    const result = await resp.json();

    if(!result || result === null || result === undefined) throw new Error("Cannot fetch data from machine"); 

    res.status(200).json({
      result
    });
    
  } catch (error) {
    if(error instanceof Error) {
      res.status(500).json({
        message: `${error}`
      })
    }
  }

})

router.get('/machines', async (_req: Request, res: Response) => {
  try {
    const machines = await prisma.machine.findMany();
    res.status(200).json({ machines });
  } catch (error) {
    res.status(500).json({ message: `${error}` })
  }
})

router.post('/machine/:id/start', checkToken, async(req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body as setProgramInput; 
  const url = `http://${id}:4000/control/start`
  try {
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${(req as any).token}`
      },
      body: JSON.stringify(data)
    })
    const result = await resp.json();
    
    if(!resp.ok) throw new Error("You don't have enough credits")

    res.status(200).json({
      result,
    })

  } catch (error) {
    if(error instanceof Error) {
      res.status(500).json({
        message: error.message,
        stackTrace: error.stack
      })
    }
  }
})

app.listen(PORT, () => {
  console.log(`Server is running at localhost:${PORT}`);
});
