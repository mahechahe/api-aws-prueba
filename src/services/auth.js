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
exports.registerNewUser = exports.loginUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const bcrypt_handler_1 = require("../utils/bcrypt.handler");
const jwt_handler_1 = require("../utils/jwt.handler");
const registerNewUser = (authUser) => __awaiter(void 0, void 0, void 0, function* () {
    const resNewUser = yield user_1.default.findOne({
        email: authUser.email,
    });
    if (resNewUser)
        return "Usuario ya existe";
    const passwordHash = yield (0, bcrypt_handler_1.encrypt)(authUser.password);
    const registerNewUser = yield user_1.default.create({
        email: authUser.email,
        password: passwordHash,
        name: authUser.name,
    });
    return registerNewUser;
});
exports.registerNewUser = registerNewUser;
const loginUser = (authUser) => __awaiter(void 0, void 0, void 0, function* () {
    const resNewUser = yield user_1.default.findOne({
        email: authUser.email,
    });
    if (!resNewUser)
        return "Usuario no existe";
    const passwordHash = resNewUser.password;
    const validatePass = yield (0, bcrypt_handler_1.verified)(authUser.password, passwordHash);
    if (!validatePass)
        return "Password incorrecta";
    const token = (0, jwt_handler_1.generateToken)(resNewUser.email);
    const data = {
        token,
        user: resNewUser
    };
    return data;
});
exports.loginUser = loginUser;
