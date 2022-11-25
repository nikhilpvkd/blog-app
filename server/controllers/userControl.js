import { db } from "../db.js";

export const viewUsers = (req, res) => {
    db.query(
        "select `id`, `user_name`,`user_email`, `img`,`created_at` from users",
        (err, result) => {
            if (err) {
                res.status(404).json({
                    status: "failed",
                    status_code: 404,
                    message: err.code,
                });
                throw err;
            }

            return res.status(200).json({
                status: "success",
                status_code: "200",
                message: "user details",
                data: result,
            });
        }
    );
};
