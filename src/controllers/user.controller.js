import userService from "../services/user.service.js";

const getAllUsers = async (req, res) => {
    const users = await userService.getAllUsers();
    if (!users || users.length == 0) {
        res.status(404).json({ message: "No users found." })
    }
    res.json(users);
};

const getUserById = async (req, res) => {
    const user = await userService.getUserById(req.params.id);
    if (!user) {
        res.status(404).json({ message: "No such user found." })
    }
    res.json(user);
};

const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.json(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const updateUser = async (req, res) => {
    const id = req.params.id;
    const input = req.body;
    try {
        const user = await userService.updateUser(id, input);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await userService.deleteUser(req.params.id);
        if (!user) {
            res.status(404).json({ message: "No such user found." })
        }
        res.json({ message: "User deleted Successfully." })
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export default { getAllUsers, getUserById, createUser, updateUser, deleteUser }