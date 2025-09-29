import { NextFunction, Request, Response } from 'express';
import { registerSchema } from '../schemas';
// import { randomBytes } from 'crypto'; 

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
