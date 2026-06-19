import RegistrationRequests from "../models/RegistrationRequests.js";
import UserSchema from "../models/User.js"
import authService from "./auth.service.js";
import userService from "./user.service.js";

const getAllRegistrationRequests = async () => {
    const rr = await RegistrationRequests.find();
    return rr;
};

const getRegistrationRequestsById = async (id) => {
    const rr = await RegistrationRequests.findById(id);
    return rr;
};

const createRegistrationRequests = async (data) => {
    const existingEmail = await userService.getUserByEmail(data.email);
    if (existingEmail) {
        throw {
            status: 409,
            message: "Email already exists."
        };
    }

    const existingPhone = await userService.getUserByPhone(data.phone);
    if (existingPhone) {
        throw {
            status: 409,
            message: "Phone number already exists."
        };
    }

    const existingRegisteredEmail = await RegistrationRequests.findOne({ email: data.email });
    if (existingRegisteredEmail) {
        throw {
            status: 409,
            message: "This Email has already requested for Registration, Please try another Email."
        };
    }

    const existingRegisteredPhone = await RegistrationRequests.findOne({ phone: data.phone });
    if (existingRegisteredPhone) {
        throw {
            status: 409,
            message: "This Phone Number has already requested for Registration, Please try another Number"
        }
    }

    const rr = await RegistrationRequests.create(data);
    return rr;
};

const updateRegistrationRequests = async (id, data) => {
    const rr = await RegistrationRequests.findByIdAndUpdate(id, data);
    return rr;
};

const deleteRegistrationRequests = async (id) => {
    const rr = await RegistrationRequests.findByIdAndDelete(id);
    return rr;
};

const updateRegistrationRequestsStatus = async (id, status) => {
    return await RegistrationRequests.findByIdAndUpdate(
        id,
        { status },
        { new: true },
    );
};

const approveRegistrationRequest = async (id) => {
    const rr = await RegistrationRequests.findByIdAndUpdate(
        id,
        { status: "APPROVED" },
        { new: true }
    );

    const userData = rr.toObject();
    delete userData._id;
    delete userData.__v;

    const createdUser = await authService.register(userData);
    return createdUser;
};

export default { getAllRegistrationRequests, getRegistrationRequestsById, createRegistrationRequests, updateRegistrationRequests, deleteRegistrationRequests, updateRegistrationRequestsStatus, approveRegistrationRequest }
