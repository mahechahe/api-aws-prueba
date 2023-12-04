import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "token123";

export const generateToken =  (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: "2h",
  });
  return jwt;
};

export const verifyToken =  (jwt: string) => {
    const isValidate = verify(jwt, JWT_SECRET)
    return isValidate
};  
