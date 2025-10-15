import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { validateRegister, validateLogin, verifyPasswd, generateToken, hashPasswd, checkToken } from './middleware/middleware';
import { LoginInput, RegisterInput, setProgramInput } from 'schemas';

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
  if (!token) throw new Error("Cannot fetch token after validate")
  try {
    await prisma.userToken.update({
      where: { token: token },
      data: { revokedAt: new Date() }
    })
    res.status(200).json({ message: "Logged out successfuly" })
  } catch (error) {
    if (error instanceof Error) {
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
  const toolcahin = req.headers["request-toolchain"] || null;
  const programParameters = req.body.programParams;

  try {
    const findUser = await prisma.user.findUnique({
      where: { id: userId }
    })

    if (!findUser) return res.status(400).json({ message: "user not found" })

    if(toolcahin != null) {
      const usage = await prisma.machineUsage.create({
        data: {
          userId: findUser.id,
          machineId: machineUsageId,
          action: "start",
          parameters: programParameters
        }
      })

      if(!usage) throw new Error("usage not created")
    }
    if (machineUsageId === null) {
      if (!Number.isFinite(amount) || amount <= 0) return res.status(400).json({ messsage: "Invalid amount" })

      const newCreditsAmount = await prisma.user.update({
        where: { id: userId },
        data: { credits: { increment: amount }, }
      })

      await prisma.walletTransaction.create({
        data: {
          userId: userId,
          credits: -Math.abs(amount),
          machineUsageId: machineUsageId
        }
      })

      res.status(200).json({ message: "Credits added successfuly", credits: newCreditsAmount.credits })
    } else {

      let propperMachineId = machineUsageId.split("M").pop();

      const userCurrentCredits = findUser.credits;
      if (userCurrentCredits === null || userCurrentCredits < amount) return res.status(400).json({ message: "You don't have enough credits for that operation" })

      const newCreditsAmount = await prisma.user.update({
        where: { id: userId },
        data: { credits: { decrement: amount }, }
      })

      await prisma.walletTransaction.create({
        data: {
          userId: userId,
          credits: amount,
          machineUsageId: Number(propperMachineId)
        }
      })

      res.status(200).json({
        message: "Transaction successful",
        creditsBefore: userCurrentCredits,
        creditsAfter: newCreditsAmount.credits
      })
    }

  } catch (error) {
    res.status(500).json({ message: `${error}` })
  }
})

router.get('/machine/:id', checkToken, async (req: Request, res: Response) => {
  const id = req.params.id;
  const url = `http://${id}:4000/getInfo`;
  try {
    const resp = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json",
                  "Request-Type": "Check" },
    });

    const result = await resp.json();

    if (!result || result === null || result === undefined) throw new Error("Cannot fetch data from machine");

    res.status(200).json({
      result
    });

  } catch (error) {
    if (error instanceof Error) {
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

router.post('/machine/:id/start', checkToken, async (req: Request, res: Response) => {
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

    switch (resp.status) {
      case 400:
        throw new Error("Invalid program parameters")

      case 500:
        throw new Error("Operation not allowed in current state")

      case 404:
        throw new Error("Insufficient credits")

      default: null
    }

    res.status(200).json({
      result,
    })

  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
        message: error.message,
        stackTrace: error.stack
      })
    }
  }
})

router.patch('/machine/:id/stop', checkToken, async (req: Request, res: Response) => {
  const id = req.params.id;
  const url = `http://${id}:4000/control/stop`;
  try {
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${(req as any).token}`
      },
    })
    const result = await resp.json();

    switch (resp.status) {
      case 400:
        throw new Error("Operation not allowed in current state")
      default: null
    }

    res.status(200).json({
      result
    })

  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error"
    })
  }
})

router.patch('/machine/:id/pause', checkToken, async (req: Request, res: Response) => {
  const id = req.params.id;
  const url = `http://${id}:4000/control/pause`
  try {
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${(req as any).token}`
      },
    })
    const result = await resp.json();

    switch (resp.status) {
      case 400:
        throw new Error("Operation not allowed in current state")
      default: null
    }

    res.status(200).json({
      result
    })

  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error"
    })
  }
})

router.patch('/machine/:id/resume', checkToken, async (req: Request, res: Response) => {
  const id = req.params.id;
  const url = `http://${id}:4000/control/resume`
  try {
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${(req as any).token}`
      },
    })
    const result = await resp.json();

    switch (resp.status) {
      case 400:
        throw new Error("Operation not allowed in current state")
      default: null
    }

    res.status(200).json({
      result
    })

  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error"
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running at localhost:${PORT}`);
});
