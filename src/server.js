import express from "express"
import config from "./config/config.js"
import connectDB from "./config/database.js";
import productRoute from "./routes/product.route.js"
import categoryRoute from "./routes/category.route.js"
import userRoute from "./routes/user.route.js"
import authRoute from "./routes/auth.route.js"
import cors from "cors"
import auth from "./middlewares/auth.js";
import supplierRoute from "./routes/supplier.route.js"

const app = express();
connectDB();

app.use(express.json());
app.use(cors());

const port = config.port;

app.get("/", (req, res) => {
    res.send("Inventory Management System.");
});

app.use("/api/product", auth, productRoute);
app.use("/api/category", auth, categoryRoute);
app.use("/api/user", auth, userRoute);
app.use("/api/auth", authRoute);
app.use("/api/supplier", auth, supplierRoute);

app.listen(port, () => {
    console.log(`App Listening in port ${port}`);
});