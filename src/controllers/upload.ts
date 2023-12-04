import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

export const uploadImage = async (req: Request, res: Response) => {
    try {
      const body = req.body;
      res.json({
        message: 'Hola'
      });
    } catch (error) {
      handleHttp(res, "ERROR_REGISTER", error);
    }
  };