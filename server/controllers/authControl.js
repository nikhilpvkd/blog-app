import { db } from "../db.js";

export const register = (req, res) => {
    const q = "select * from users where user_name=? or user_email=?";
    db.query(q, [req.body.userName, req.body.userEmail], (err, data) => {
        if (err) res.status(404).json(err);
        if (data.length > 0)
            res.status(504).json("user name or email already exist");

        const q =
            "insert into users(`user_name`,`user_email`,`password`) values(?)";
        const values = [
            req.body.userName,
            req.body.userEmail,
            req.body.password,
        ];
        db.query(q, [values], (err, result) => {
            if (err) res.json(err);
            res.status(200).json("user created sussess fully");
        });
    });
};
