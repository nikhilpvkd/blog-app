import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import moment from "moment";

// for creating a new user
export const register = (req, res) => {
    const q = "select * from users where user_name=? or user_email=?";
    let values = [req.body.userName, req.body.userEmail];

    db.query(q, [...values], (err, data) => {
        if (err) {
            return res.status(500).json({
                status: "failed",
                message: err.message,
                data: null,
            });
        }

        if (data.length !== 0) {
            return res.status(504).json({
                status: "failed",
                message: "username or email already exist",
                data: null,
            });
        } else {
            const q =
                "insert into users(`user_name`,`user_email`,`img`,`password`,`created_at`) values(?)";
            let img = "";

            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);
            const created_at = moment().format();
            console.log(created_at);
            const values = [
                req.body.userName,
                req.body.userEmail,
                (img = ""),
                hash,
                created_at,
            ];
            db.query(q, [values], (err, result) => {
                if (err) res.json(err);
                return res.status(200).json({
                    status: "success",
                    message: "user created successfully",
                    data: null,
                });
            });
        }
    });
};

// for loging in user...
export const logIn = (req, res) => {
    let q = `select * from users where user_name="${req.body.userName}" OR user_email="${req.body.userName}"`;
    db.query(q, (err, data) => {
        if (err)
            return res.status(500).json({
                status: "failed",
                message: err.message,
                data: null,
            });

        if (data.length === 0)
            return res.status(401).json({
                status: "failed",
                message: "Unautherized user",
                data: null,
            });

        // hashd password from db for verification
        const hash = data[0].password;

        let isPassword = bcrypt.compareSync(req.body.password, hash);

        if (!isPassword) {
            return res.status(401).json({
                status: "failed",
                message: "User name or password is wrong",
                data: null,
            });
        } else {
            const token = jwt.sign({ id: data[0].id }, "blog-app");

            const { password, ...others } = data[0];

            return res
                .cookie("access_token", token, {
                    httpOnly: true,
                })
                .status(200)
                .json({
                    status: "success",
                    message: "Login success !!",
                    data: others,
                });
        }
    });
};

export const logOut = (req, res) => {
    res.clearCookie("access_token", {
        sameSite: "none",
        secure: true,
    }).json("user has been loged Out");
};
