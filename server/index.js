import * as dotenv from "dotenv";
import express from "express";
import { db } from "./db.js";
import userRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoute);
app.use("/api/users", authRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server running in ${PORT}`);
});
