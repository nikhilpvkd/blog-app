import * as dotenv from "dotenv";
import express from "express";
import userRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";
import cors from "cors";
import cookie from "cookie-parser";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookie());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server running in ${PORT}`);
});
