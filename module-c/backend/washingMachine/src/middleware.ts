import {Request, Response, NextFunction} from 'express'

let token: string | undefined = undefined;

export function setOwner(req: Request, _res: Response, next: NextFunction) {
  
  const authHeader = req.headers["authorization"];
  token = authHeader?.split(" ")[1];

  (req as any).token = token;
  
  next();
}

export function checkOwner(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];
  const requestType = req.headers["request-type"] as string | null;
  const requestedToken = authHeader?.split(" ")[1];
  const parts = req.path.split("/");
  const action = parts[parts.length - 1] || "access";
  const message = `You are not authorized to ${action} this machine`
  let myCycle = false;

  if(requestedToken !== token && !requestType) {
    return res.status(403).json({
      message
    })
  }

  if(token === undefined && requestType) {
    myCycle = false 
  }
  
  if(requestedToken === token && requestType) {
    myCycle = true
  }

  (req as any).myCycle = myCycle;
  (req as any).token = token;

  next();
}
