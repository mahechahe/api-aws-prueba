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
exports.updateBlog = exports.deleteBlog = exports.postBlog = exports.getBlogs = exports.getBlog = void 0;
const error_handle_1 = require("../utils/error.handle");
const getBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, "ERROR_GET_BLOG");
    }
});
exports.getBlog = getBlog;
const getBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        res.json(body);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, "ERROR_GET_BLOGS");
    }
});
exports.getBlogs = getBlogs;
const postBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        res.json(body);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, "ERROR_POST_BLOG");
    }
});
exports.postBlog = postBlog;
const deleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, "ERROR_DELETE_BLOG");
    }
});
exports.deleteBlog = deleteBlog;
const updateBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, "ERROR_UPDATE_BLOG");
    }
});
exports.updateBlog = updateBlog;
