import {Request, Response, NextFunction} from 'express'

let token: string | undefined;

export function setOwner(req: Request, _res: Response, next: NextFunction) {
  
  const authHeader = req.headers["authorization"];
  token = authHeader?.split(" ")[1];

  (req as any).token = token;
  
  next();
}

export function checkOwner(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];
  const requestedToken = authHeader?.split(" ")[1];

  if(requestedToken != token) {
    res.status(403)
  }
  next();
}
