"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
const jwt_handler_1 = require("../utils/jwt.handler");
const checkJwt = (req, res, next) => {
    try {
        const jwtUser = req.headers.authorization || "";
        const jwt = jwtUser.split(" ").pop();
        if (!jwt)
            return res.status(402).json({
                message: "Token no existe",
            });
        const isValidate = (0, jwt_handler_1.verifyToken)(jwt);
        if (!isValidate)
            return res.status(401).json({
                message: "No tienes una sesion valida",
            });
        req.user = isValidate;
        next();
    }
    catch (error) {
        console.log("error", error);
        res.status(402).json({
            message: "SESION_NO_VALIDA",
        });
    }
};
exports.checkJwt = checkJwt;
