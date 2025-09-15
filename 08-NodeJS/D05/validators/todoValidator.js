import joi from 'joi';

export const todoSchema = joi.object({
    title: joi.string().required().min(5).max(20),
    status: joi.string().valid('to-do', 'in progress', 'done').default('to-do')
}); 