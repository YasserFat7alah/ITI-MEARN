import AppError from "../utils/AppError.js";

const validate = (_schema) => {
    return (req, res, next) => {
        const validationObj = _schema.validate(req.body, { abortEarly: false });

        if (validationObj.error) {
            const error = validationObj.error.details.map(error => error.message).join(", ");
            console.log(error);
            return next(new AppError(404, error))
        } else {
            next()
        }

    }
}

export default validate;