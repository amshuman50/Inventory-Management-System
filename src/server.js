import express from "express"
import config from "./config/config.js"

const app = express();

const port = config.port;

app.get("/", (req, res) => {
    res.send("Inventory Management System.");
});

app.listen(port, () => {
    console.log(`App Listening in port ${port}`);
});