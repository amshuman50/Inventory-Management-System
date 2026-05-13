import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required."],
        minLength: 3,
        maxLength: 50
    },
    phone: {
        type: String,
        required: [true, "Phone number is required."],
        minLength: 6,
        maxLength: 13,
        unique: [true, "Phone number already exists."]
    },
    address: {
        country: {
            type: String,
            default: "Nepal"
        },
        province: {
            type: String,
            required: [true, "Province is required."]
        }
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        lowercase: true,
        unique: [true, "Email already exists."],
        validate: {
            validator: (value) => {
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                return emailRegex.test(value);
            },
            message: "Invalid Email Address."
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [6, "Password length must be greater than 6."]
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    profileImageUrl: String,
    role: {
        type: [String],
        enum: ["SUPER_ADMIN", "ADMIN", "CUSTOMER", "SUPPLIER"],
        default: ["CUSTOMER"]
    },
    contactPerson: String,
    customerType: String,
})

export default mongoose.model("UserSchema", UserSchema);