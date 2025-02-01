const errorHandler = (err, req, res, next) => {
    console.error('Error stack:', err.stack);

    // If the error has a specific status code, use it, otherwise default to 500
    const statusCode = err.statusCode || 500;

    // Send error details in response
    res.status(statusCode).json({
        message: err.message || 'Something went wrong!',
        stack: process.env.NODE_ENV === 'development' ? err.stack : null,
    });
};

module.exports = errorHandler;
