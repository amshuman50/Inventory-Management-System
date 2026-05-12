import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is required."]
    },
    sku: {
        type: String,
        required: [true, "sku is required."]
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: [true, "Product category is required."]
    },
    supplier: {
        type: String,
        required: [true, "Supplier of the product is required."]
    },
    price: {
        type: Number,
        min: [1, "Price must be greater than 1."],
        max: [1000000, "Price must be less than 100000"]
    },
    stock: {
        type: Number,
        default: 1,
        max: [1000, "Stock must be less than 1000."]
    },
    status: {
        type: String,
        default: "Active",
        enum: ["Active", "InActive"]
    }
});

export default mongoose.model("Product", ProductSchema)