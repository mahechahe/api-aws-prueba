import { Request, Response } from "express";
import {
  deleteItemService,
  getItemService,
  getItemsService,
  insertItem,
  updateItemService,
} from "../services/item";
import { handleHttp } from "../utils/error.handle";
import { JwtPayload } from "jsonwebtoken";

export const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const resItem = await getItemService(id);
    const data = resItem ?? [];
    res.json(data);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

interface RequestExtend extends Request {
  user?: string | JwtPayload;
}

export const getItems = async (req: RequestExtend, res: Response) => {
  try {
    const body = req.body;
    const resGetItems = await getItemsService();

    console.log("req.user", req.user);

    const data = resGetItems ?? [];
    res.json(data);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};

export const postItem = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const resItem = await insertItem(body);
    res.json(resItem);
  } catch (error) {
    handleHttp(res, "ERROR_POST_ITEM", error);
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const resItem = await deleteItemService(id);
    res.json(resItem);
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};

export const updateItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const resItem = await updateItemService(id, body);
    res.json(resItem);
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};
