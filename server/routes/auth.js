import express from "express";
import { logIn, logOut, register } from "../controllers/authControl.js";
import {
    loginValidation,
    registerValidation,
} from "../middlewares/validation/authValidation.js";

const router = express.Router();

router.post("/register", registerValidation, register);
router.post("/login", loginValidation, logIn);
router.post("/logout", logOut);

export default router;
