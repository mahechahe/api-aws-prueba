"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateItem = exports.deleteItem = exports.postItem = exports.getItems = exports.getItem = void 0;
const item_1 = require("../services/item");
const error_handle_1 = require("../utils/error.handle");
const getItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const resItem = yield (0, item_1.getItemService)(id);
        const data = resItem !== null && resItem !== void 0 ? resItem : [];
        res.json(data);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, "ERROR_GET_ITEM");
    }
});
exports.getItem = getItem;
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const resGetItems = yield (0, item_1.getItemsService)();
        console.log("req.user", req.user);
        const data = resGetItems !== null && resGetItems !== void 0 ? resGetItems : [];
        res.json(data);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, "ERROR_GET_ITEMS");
    }
});
exports.getItems = getItems;
const postItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const resItem = yield (0, item_1.insertItem)(body);
        res.json(resItem);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, "ERROR_POST_ITEM", error);
    }
});
exports.postItem = postItem;
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const resItem = yield (0, item_1.deleteItemService)(id);
        res.json(resItem);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, "ERROR_DELETE_ITEM");
    }
});
exports.deleteItem = deleteItem;
const updateItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const body = req.body;
        const resItem = yield (0, item_1.updateItemService)(id, body);
        res.json(resItem);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, "ERROR_UPDATE_ITEM");
    }
});
exports.updateItem = updateItem;
