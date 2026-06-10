import mongoose from "mongoose";

const salesSchema = new mongoose.Schema({
    // invoice_no: {
    //     type: String,
    //     required: [true, "Invoice Number is Required."]
    // }
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: [true, "For sales a Customer is required."]
    },
    status: {
        type: String,
        enum: ["PENDING", "COMPLETED", "CANCELLED"],
        default: "PENDING"
    },
    salesDate: {
        type: Date,
        required: [true, "Sales date is required."]
    },
    sales: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: [true, "For sales a Product is required."]
        },
        city: String,
        price: {
            type: Number,
            required: [true, "Price of the sales is required."]
        }
    }],
});

export default mongoose.model("Sales", salesSchema);