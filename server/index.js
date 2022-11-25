import * as dotenv from "dotenv";
import express from "express";
import userRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";
import postRoute from "./routes/posts.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { verify } from "./middlewares/verifyJwt.js";

dotenv.config();
const app = express();
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", verify, userRoute);
app.use("/api/posts/", verify, postRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server running in ${PORT}`);
});
