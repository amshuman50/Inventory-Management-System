import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Category name is required."]
    },
    description: String,
    status: {
        type: String,
        default: "Active",
        enum: ["Active", "InActive"]
    }
});

export default mongoose.model("Category", categorySchema);