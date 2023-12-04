
import { Request, Response, NextFunction } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log('Soy el log');
    next()
}

export { logMiddleware }