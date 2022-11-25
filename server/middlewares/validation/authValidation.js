export const registerValidation = (req, res, next) => {
    const { userName, userEmail, password } = req.body;

    if (userName && userEmail && password) {
        next();
    } else {
        return res.status(400).json({
            status: "failed",
            message: "validation error, all feilds are required",
        });
    }
};

export const loginValidation = (req, res, next) => {
    const { userName, password } = req.body;

    if (userName && password) {
        next();
    } else {
        return res.status(400).json({
            status: "failed",
            message: "validation error, all feilds are required",
        });
    }
};
