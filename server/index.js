import express from "express";
import { db } from "./db.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("success");
});

app.listen(3005, () => {
    console.log("Server runnig in 3005");
});
