import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.handler";
import { JwtPayload } from "jsonwebtoken";

interface RequestExtend extends Request {
  user?: string | JwtPayload;
}

export const checkJwt = (
  req: RequestExtend,
  res: Response,
  next: NextFunction
) => {
  try {
    const jwtUser = req.headers.authorization || "";
    const jwt = jwtUser.split(" ").pop();

    if (!jwt)
      return res.status(402).json({
        message: "Token no existe",
      });

    const isValidate = verifyToken(jwt);

    if (!isValidate)
      return res.status(401).json({
        message: "No tienes una sesion valida",
      });

    req.user = isValidate;

    next();
  } catch (error) {
    console.log("error", error);
    res.status(402).json({
      message: "SESION_NO_VALIDA",
    });
  }
};
