import bcrypt from "bcrypt"
import UserSchema from "../models/User.js"

const register = async (data) => {
    const user = await UserSchema.findOne({ $or: [{ email: data?.email }, { phone: data?.phone }] });
    if (user) {
        throw {
            status: 409,
            message: "User already exists."
        }
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(data.password, salt);
    const createdUser = await UserSchema.create({ ...data, password: hashedPassword });
    return {
        _id: createdUser.id,
        name: createdUser.name,
        phone: createdUser.phone,
        roles: createdUser.roles
    }
};

const login = async (data) => {
    const user = await UserSchema.findOne({ $or: [{ email: data?.email }, { phone: data?.phone }] });
    if (!user) {
        throw {
            status: 404,
            message: "User not found"
        }
    }
    const isPasswordMatch = bcrypt.compareSync(data.password, user.password);
    if (!isPasswordMatch) {
        throw {
            status: 400,
            message: "Password do not match"
        }
    }
    return {
        _id: user._id,
        email: user.email,
        name: user.name,
        phone: user.phone,
        roles: user.roles,
    };
}

export default { login, register }
