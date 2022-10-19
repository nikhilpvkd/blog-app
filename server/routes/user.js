import express from "express";
import { viewUsers } from "../controllers/userControl.js";
import { db } from "../db.js";

const router = express.Router();

router.get("/", viewUsers);

export default router;
