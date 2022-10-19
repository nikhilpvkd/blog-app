import { db } from "../db.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
    const q = "select * from users where user_name=? or user_email=?";
    db.query(q, [req.body.userName, req.body.userEmail], (err, data) => {
        if (err) return res.status(404).json(err);
        console.log(data.length);
        if (data.length)
            return res.status(504).json("user name or email already exist");

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
            return res.status(200).json("user created sussess fully");
        });
    });
};
