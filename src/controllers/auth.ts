import { handleHttp } from "../utils/error.handle";
import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth";

export const registerController = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const responseUser = await registerNewUser(body);
    res.json(responseUser);
  } catch (error) {
    handleHttp(res, "ERROR_REGISTER", error);
  }
};

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const isLogin = await loginUser({ email, password });

    res.send(isLogin)
  } catch (error) {
    handleHttp(res, "ERROR_LOGIN", error);
  }
};
