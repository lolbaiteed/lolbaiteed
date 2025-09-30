import { NextFunction, Request, Response } from 'express';
import { registerSchema } from '../schemas';
import { randomBytes, scryptSync, timingSafeEqual } from 'crypto'; 

//
// function generatePasswdHash() {
//   return randomBytes(32).toString('hex');
// }

function hashPasswd(passwd: string) {
  const salt = randomBytes(16).toString('hex');
  const hash = scryptSync(passwd, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

function verifyPasswd(passwd: string, stored: string) {
  const [salt, hash] = stored.split(":");
  const newHash = scryptSync(passwd, salt, 64).toString('hex');
  return timingSafeEqual(Buffer.from(hash, "hex"), Buffer.from(newHash, "hex"));
}
export function validateRegister( req: Request, res: Response, next: NextFunction) {
  try {
    const passwdHash = hashPasswd(req.body.passwd);
    console.log(passwdHash);
    req.body = registerSchema.parse(req.body); 
    next();
  } catch (error) {
    res.status(400).json({
      message: "Invalid input",
      errors: error instanceof Error ? error.message : error,
    });
  }
}

