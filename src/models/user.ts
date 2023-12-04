import { Schema, model } from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            default: 'Hola soy la descripcion'
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const UserModel = model('users', UserSchema)
export default UserModel