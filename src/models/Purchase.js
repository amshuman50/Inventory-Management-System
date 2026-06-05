import mongoose from "mongoose";
// import { ProductSchema } from "./Product.js";

const purchaseSchema = new mongoose.Schema({
    // poNumber:{
    //     type:String,
    //     required:[true,"poNumber is required."]
    // },
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Supplier",
        required: [true, "Supplier of the purchase is required."]
    },
    // product: ProductSchema,
    // product: {
    //     type: ProductSchema,
    //     required: true
    // },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: [true, "Product is Required."]
    }
    // items: {
    //     type: Number,
    //     required: [true, "Number of items are required."]
    // },
    // price: {
    //     type: Number,
    //     required: [true, "Purchase price is required."]
    // },
    // status: {
    //     type: Boolean,
    //     defaule: false
    // }
}, { timestamps: true });

export default mongoose.model("Purchase", purchaseSchema);