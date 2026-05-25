import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Customer Name is required."]
    },
    address: {
        type: String,
        required: [true, "Customer Address is required."]
    },
    email: {
        type: String,
        required: [true, "Customer email is required."]
    },
    phone: {
        type: Number,
        required: [true, "Customer Phone number is required."]
    },
    type: {
        type: String,
        default: "First Time"
    },
    status: {
        type: String,
        default: "Active",
        enum: ["Active", "InActive", "Blocked"]
    }
});

export default mongoose.model("Customer", customerSchema);