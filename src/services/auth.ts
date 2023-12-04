import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handler";
import { generateToken } from "../utils/jwt.handler";

const registerNewUser = async (authUser: User) => {
  const resNewUser = await UserModel.findOne({
    email: authUser.email,
  });
  if (resNewUser) return "Usuario ya existe";

  const passwordHash = await encrypt(authUser.password)

  const registerNewUser = await UserModel.create({
    email: authUser.email,
    password: passwordHash,
    name: authUser.name,
  });

  return registerNewUser;
};

const loginUser = async (authUser: Auth) => {
  const resNewUser = await UserModel.findOne({
    email: authUser.email,
  });
  if (!resNewUser) return "Usuario no existe";

  const passwordHash = resNewUser.password

  const validatePass = await verified(authUser.password, passwordHash)
  if(!validatePass) return "Password incorrecta"

  const token = generateToken(resNewUser.email)

  const data = {
    token,
    user: resNewUser
  }

  return data
};

export { loginUser, registerNewUser };
