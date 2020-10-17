const notFound = (req,res,next)=>{
    const error = new Error('Not Found',);
    res.status(404);
    next(error);
}

//eslint-disable no-unused-vars
const errorHandler = (error,req,res,next)=>{
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message:error.message,
        stack: process.env.NODE_ENV === 'production' ? 'a' : error.stack
    });
}

module.exports = {
    notFound,
    errorHandler
};