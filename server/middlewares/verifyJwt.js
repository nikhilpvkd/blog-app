import jwt from "jsonwebtoken";
export const verify = (req, res, next) => {
    const token = req.cookies.access_token;

    if (token) {
        jwt.verify(token, "blog-app", (err, userInfo) => {
            if (err) {
                return res.status(402).json({
                    status: "failed",
                    message: "invalid tocken",
                });
            }
            req.uid = userInfo.id;
            next();
        });
    } else {
        return res.status(401).json({
            status: "failed",
            message: "unautherised user",
        });
    }
};
