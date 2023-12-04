import { Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item";
import { logMiddleware } from "../middleware/log";
import { checkJwt } from "../middleware/session";

const router = Router()

router.get('/', checkJwt, logMiddleware, getItems)
router.get('/:id', logMiddleware, getItem)
router.post('/', postItem)
router.put('/:id', updateItem)
router.delete('/:id', deleteItem)

export { router };
