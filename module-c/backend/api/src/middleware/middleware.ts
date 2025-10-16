import { NextFunction, Request, Response } from 'express';
import { addMachineSchema, loginShcema, registerSchema} from '../schemas';
import { randomBytes, scryptSync, timingSafeEqual } from 'crypto';
import { PrismaClient } from '@prisma/client';
import { AuthenticationError } from './types';


const prisma = new PrismaClient();

/**
*   @param password - password form input
*   @retuns salt with hashed password, separated with ":" 
*/
export function hashPasswd(passwd: string) {
  const salt = randomBytes(16).toString('hex');
  const hash = scryptSync(passwd, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

/**
*   @param passwd - password from input
*   @param stored - stored password + salt from db
*   @retunrs ture if password match, false otherwise
*/
export function verifyPasswd(passwd: string, stored: string) {
  const [salt, hash] = stored?.split(":");
  const newHash = scryptSync(passwd, salt, 64).toString('hex');
  return timingSafeEqual(Buffer.from(hash, "hex"), Buffer.from(newHash, "hex"));
}

/** @returns 64-character hexadecimal token
*/
export function generateToken() {
  return randomBytes(32).toString('hex');
}

export function validateRegister(req: Request, res: Response, next: NextFunction) {
  try {
    req.body = registerSchema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json({
      message: "Invalid input",
      errors: error instanceof Error ? error.message : error,
    });
  }
}

export function validateLogin(req: Request, res: Response, next: NextFunction) {
  try {
    req.body = loginShcema.parse(req.body);
    next();
  } catch (error) {
    res.status(401).json({
      message: "Invalid login/password",
      errors: error instanceof Error ? error.message : error,
    })
  }
}

export async function checkToken(req: Request, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers['authorization'];
    if (!authHeader?.startsWith("Bearer ")) {
      throw new AuthenticationError("Invalid token type")
    } 
    const token = authHeader.split(" ")[1];

    const findToken = await prisma.userToken.findUnique({
      where: { token: token }
    });

    if (!findToken || findToken.revokedAt) {
      throw new AuthenticationError("Invalid or expired token")
    }

    (req as any).token = token;
    (req as any).userId = findToken.userId;
    next();
  } catch (error) {
    if(error instanceof AuthenticationError) {
    res.status(401).json({
      message: error.message
    });
    }
  }
}

export function validateMachine(req: Request, res: Response, next: NextFunction) {
  try {
    req.body = addMachineSchema.parse(req.body)
    next()
  } catch (error) {
    res.status(418).json({
      message: "I'am a teapot",
      errors: error instanceof Error ? error.message : String(error)
    })
  }
}
