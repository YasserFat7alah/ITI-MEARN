import joi from 'joi';


export const userSchema = joi.object({
    username: joi.string().required().min(8),
    password: joi.string().required(),
    firstName: joi.string().required().min(3).max(15),
    lastName: joi.string().required().min(3).max(15),
    dob: joi.date(),
    role: joi.string().valid("admin", "user").default("user"),
});