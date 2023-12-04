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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateItemService = exports.deleteItemService = exports.getItemService = exports.getItemsService = exports.insertItem = void 0;
const item_1 = __importDefault(require("../models/item"));
const insertItem = (item) => __awaiter(void 0, void 0, void 0, function* () {
    const responseInsert = yield item_1.default.create(item);
    return responseInsert;
});
exports.insertItem = insertItem;
const getItemsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const responseAllItems = yield item_1.default.find({});
    return responseAllItems;
});
exports.getItemsService = getItemsService;
const getItemService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseAllItems = yield item_1.default.findOne({
        _id: id,
    });
    return responseAllItems;
});
exports.getItemService = getItemService;
const deleteItemService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseAllItems = yield item_1.default.deleteOne({
        _id: id,
    });
    return responseAllItems;
});
exports.deleteItemService = deleteItemService;
const updateItemService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const responseAllItems = yield item_1.default.findByIdAndUpdate({
        _id: id,
    }, data, {
        new: true
    });
    return responseAllItems;
});
exports.updateItemService = updateItemService;
