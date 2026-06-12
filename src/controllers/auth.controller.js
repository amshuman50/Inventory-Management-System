import authService from "../services/auth.service.js";
import jwt from "../utils/jwt.js"

const login = async (req, res) => {
    const input = req.body;
    try {
        if (!input) {
            throw {
                message: "Invalid Data"
            }
        }
        if (!input.email || input.phone) {
            throw {
                message: "Either email or phone number is required."
            }
        }
        if (!input.password) {
            throw {
                message: "Password is required."
            }
        }
        const user = await authService.login(input);
        const token = jwt.createToken(user);
        res.cookie("authToken", token, {
            httpOnly: true,
            //   secure: false, // true in production with HTTPS
            //   sameSite: "lax",
            secure: true,
            sameSite: "none",
            maxAge: 86400 * 1000
        });
        res.json({ ...user, token });
    } catch (error) {
        res.status(error.status || 400).send(error.message);
    }
};

const register = async (req, res) => {
    const input = req.body;
    try {
        if (!input) {
            throw {
                message: "Invalid Data"
            }
        }
        const user = await authService.register(input);
        res.json(user);
    } catch (error) {
        res.status(error.status || 400).send(error.message);
    }
}

export default { login, register }