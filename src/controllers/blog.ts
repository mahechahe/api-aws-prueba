import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

export const getBlog = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};

export const getBlogs = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    res.json(body);
  } catch (error) {
    handleHttp(res, "ERROR_GET_BLOGS");
  }
};

export const postBlog = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    res.json(body);
  } catch (error) {
    handleHttp(res, "ERROR_POST_BLOG");
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_BLOG");
  }
};

export const updateBlog = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_BLOG");
  }
};
