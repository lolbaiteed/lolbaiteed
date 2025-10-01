import { NextFunction, Request, Response } from 'express';
import { loginShcema, registerSchema } from '../schemas';
import { randomBytes, scryptSync, timingSafeEqual } from 'crypto'; 

// function generatePasswdHash() {
//   return randomBytes(32).toString('hex');
// }




export function hashPasswd(passwd: string) {
  const salt = randomBytes(16).toString('hex');
  const hash = scryptSync(passwd, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

export function verifyPasswd(passwd: string, stored: string) {
  const [salt, hash] = stored?.split(":");
  const newHash = scryptSync(passwd, salt, 64).toString('hex');
  return timingSafeEqual(Buffer.from(hash, "hex"), Buffer.from(newHash, "hex"));
}

export function generateToken() {
  return randomBytes(32).toString('hex');
}


export function validateRegister( req: Request, res: Response, next: NextFunction) {
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

export function validateLogin( req: Request, res: Response, next: NextFunction ) {
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

