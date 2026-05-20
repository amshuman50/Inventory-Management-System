import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Supplier name is required."]
    },
    contactPerson: {
        type: String
    },
    email: {
        type: String,
        required: [true, "Supplier email is required."]
    },
    phone: {
        type: Number,
        required: [true, "Supplier Phone Number is required."]
    },
    address: {
        type: String,
        required: [true, "Supplier address is required."]
    },
    status: {
        type: Boolean,
        default: true
    }
});

export default mongoose.model("Supplier",supplierSchema);