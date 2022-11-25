import moment from "moment";
import { db } from "../db.js";

export const getPosts = (req, res) => {
    let q = "";
    let values = [];

    if (req.params.id) {
        q = "select * from posts where `id` = ? and `uid` = ?";
        values = [req.params.id, req.uid];
    } else {
        q = "select * from posts where `uid` = ?";
        values = [req.uid];
    }
    console.log(q, values);

    db.query(q, values, (err, data) => {
        if (err) {
            return res.status(500).json({
                status: "failed",
                message: err.sqlMessage,
                data: null,
            });
        }
        console.log(data);
        if (data.length) {
            if (req.params.id) {
                return res.status(200).json({
                    status: "success",
                    message: "All posts",
                    data: data[0],
                });
            } else {
                return res.status(200).json({
                    status: "success",
                    message: "All posts",
                    data,
                });
            }
        } else {
            return res.status(400).json({
                status: "success",
                message: "there is no posts yet",
                data,
            });
        }
    });
};
export const updatePost = (req, res) => {
    const postId = req.params.id;

    let q =
        "update posts set `title`=?, `description`=?, `img`=? where `id`=? and `uid`=?";
    const values = [req.body.title, req.body.description, req.body.img];
    db.query(q, [...values, postId, req.uid], (err, result) => {
        if (err) {
            return res.status(500).json({
                status: "failed",
                message: err.sqlMessage,
                data: null,
            });
        }
        console.log(result);
        if (result.affectedRows !== 0) {
            return res.status(200).json({
                status: "success",
                message: "post updated successfully!",
                data: null,
            });
        }
        return res.status(402).json({
            status: "failed",
            message: "Not found! invalid Request!",
        });
    });
};

export const deletePost = (req, res) => {
    const postId = req.params.id;
    const q = `delete from posts where posts.id=${postId} and posts.uid=${req.uid}`;
    db.query(q, (err, data) => {
        if (err) {
            return res.status(500).json({
                status: "failed",
                message: err.sqlMessage,
            });
        }
        console.log(data);
        if (data) {
            return res.status(500).json({
                status: "success",
                message: "post deleted successfully",
                data: null,
            });
        }
    });
};

export const createPosts = (req, res) => {
    console.log(req.body);
    let q =
        "insert into `posts` (`title`,`description`,`img`,`uid`,`created_at`) values(?)";
    const created_at = moment().format();
    const values = [
        req.body.title,
        req.body.des,
        req.body.img,
        req.uid,
        created_at,
    ];
    db.query(q, [values], (err, data) => {
        if (err) {
            return res.status(500).json({
                status: "failed",
                message: err.sqlMessage,
                data: null,
            });
        }

        return res.status(200).json({
            status: "success",
            message: "post created successfully",
            data: null,
        });
    });
};
