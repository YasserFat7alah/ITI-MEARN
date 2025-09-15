

const errorHandler = (err, req, res, next) => {

    if (err.name === 'CastError') err.statusCode = 501;
    //  if (err.code === 11000) ;
    //  if (err.name === 'ValidationError')
    //  if (err.name === 'JsonWebTokenError') 
    //  if (err.name === 'TokenExpiredError') 


    res.status(err.statusCode || 500).json({
        status: "error",
        message: err.message || "something went wrong"
    })
}

export default errorHandler