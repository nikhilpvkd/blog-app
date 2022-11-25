import express from "express";
import {
    createPosts,
    deletePost,
    getPosts,
    updatePost,
} from "../controllers/postControllers.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPosts);
router.put("/update/:id", updatePost);
router.delete("/delete/:id", deletePost);
router.post("/create", createPosts);

export default router;
