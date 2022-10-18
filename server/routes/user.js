import express from "express";
import { viewUsers } from "../controllers/users.js";
import { db } from "../db.js";

const router = express.Router();

router.get("/", viewUsers);

export default router;
