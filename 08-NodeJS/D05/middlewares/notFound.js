import AppError from './../utils/AppError.js';

//not found
const notFound = (req, res, next) => {
    console.log('notfound')
    next(new AppError(404, `can't find ${req.originalUrl} on this server`));

}

export default notFound