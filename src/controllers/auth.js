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
exports.loginController = exports.registerController = void 0;
const error_handle_1 = require("../utils/error.handle");
const auth_1 = require("../services/auth");
const registerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const responseUser = yield (0, auth_1.registerNewUser)(body);
        res.json(responseUser);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, "ERROR_REGISTER", error);
    }
});
exports.registerController = registerController;
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const isLogin = yield (0, auth_1.loginUser)({ email, password });
        res.send(isLogin);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, "ERROR_LOGIN", error);
    }
});
exports.loginController = loginController;
