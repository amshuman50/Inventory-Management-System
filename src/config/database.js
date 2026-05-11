import mongoose from "mongoose";
import config from "./config.js";

function connectDB() {
    mongoose.connect(config.mongodbUrl).then(() => {
        console.log("MongoDB Connected Successfully.")
    }).catch((error) => {
        console.log(error);
    })
}

export default connectDB