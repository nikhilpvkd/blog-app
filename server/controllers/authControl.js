import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// for creating a new user
export const register = (req, res) => {
    const q = "select * from users where user_name=? or user_email=?";
    db.query(q, [req.body.userName, req.body.userEmail], (err, data) => {
        if (err)
            return res.status(500).json({
                status: "failed",
                message: err.message,
            });
        console.log(data.length);
        if (data.length)
            return res.status(504).json({
                status: "failed",
                message: "username or password already exist",
            });

        const q =
            "insert into users(`user_name`,`user_email`,`img`,`password`) values(?)";
        let img = "";

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const values = [
            req.body.userName,
            req.body.userEmail,
            (img = ""),
            hash,
        ];
        db.query(q, [values], (err, result) => {
            if (err) res.json(err);
            return res.status(200).json({
                status: "success",
                message: "user created successfully",
            });
        });
    });
};

// for loging in user...
export const logIn = (req, res) => {
    let q = "select * from users where user_name=?";
    db.query(q, [req.body.userName], (err, data) => {
        if (err)
            return res.status(500).json({
                status: "failed",
                message: err.message,
            });
        if (data.length === 0)
            return res.status(401).json({
                status: "failed",
                message: "Unautherized user",
            });
        console.log(data);

        // hashd password from db for verification
        const hash = data[0].password;

        let isPassword = bcrypt.compareSync(req.body.password, hash);
        if (!isPassword)
            return res.status(401).json({
                status: "failed",
                message: "Unautherized user",
            });

        const token = jwt.sign({ id: data[0].id }, "blog-app");

        const { password, ...others } = data[0];

        res.cookie("access_tocken", token, {
            httpOnly: true,
        })
            .status(200)
            .json({
                status: "success",
                message: "Login success !!",
                data: others,
            });
    });
};
