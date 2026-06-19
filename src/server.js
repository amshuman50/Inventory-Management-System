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
import customerRoute from "./routes/customer.route.js";
import purchaseRoute from "./routes/purchase.route.js";
import salesRoute from "./routes/sales.route.js"
import registrationRequestsRoute from "./routes/registrationRequests.route.js"

const app = express();
await connectDB();

app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

const port = config.port;

app.get("/api", (req, res) => {
  res.json({ status: "ok", version: "0.1.0", port: "10000", message: "Welcome to Inventory Management System." })
});

app.use("/api/product", auth, productRoute);
app.use("/api/category", auth, categoryRoute);
app.use("/api/user", auth, userRoute);
app.use("/api/auth", authRoute);
app.use("/api/supplier", auth, supplierRoute);
app.use("/api/customer", auth, customerRoute);
app.use("/api/purchase", auth, purchaseRoute);
app.use("/api/sales", auth, salesRoute);
app.use("/api/registrationRequests", registrationRequestsRoute);

app.listen(port, () => {
  console.log(`App Listening in port ${port}`);
});