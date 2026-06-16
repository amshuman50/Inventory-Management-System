import UserSchema from "../models/User.js";

const getAllUsers = async () => {
    const users = await UserSchema.find();
    return users;
};

const getUserById = async (id) => {
    const user = await UserSchema.findById(id);
    return user;
};

const updateUser = async (id, input) => {
    const user = await UserSchema.findByIdAndUpdate(id, input);
};

const deleteUser = async (id) => {
    const user = await UserSchema.findByIdAndDelete(id);
};

const getUserByEmail = async (email) => {
    return await UserSchema.findOne({ email });
};

const getUserByPhone = async (phone) => {
    return await UserSchema.findOne({ phone });
};

export default { getAllUsers, getUserById, updateUser, deleteUser, getUserByEmail, getUserByPhone }