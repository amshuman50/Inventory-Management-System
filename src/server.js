import express from "express"
import config from "./config/config.js"
import connectDB from "./config/database.js";
import productRoute from "./routes/product.route.js"
import categoryRoute from "./routes/category.route.js"

const app = express();
connectDB();

app.use(express.json());

const port = config.port;

app.get("/", (req, res) => {
    res.send("Inventory Management System.");
});

app.use("/api/product", productRoute);
app.use("/api/category", categoryRoute);

app.listen(port, () => {
    console.log(`App Listening in port ${port}`);
});