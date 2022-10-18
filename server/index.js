import * as dotenv from "dotenv";
import express from "express";
import { db } from "./db.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json("everthing ok start work");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server running in ${PORT}`);
});
