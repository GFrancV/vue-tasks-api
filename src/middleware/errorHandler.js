import mongoose, { mongo } from "mongoose";

const errorHandler = (err, req, res, next) => {
	let statusCode = err.statusCode || 500;
	let message = err.message || "Something went wrong.";
	let errors = err.errors;

	if (err instanceof mongoose.Error.CastError) {
		statusCode = 404;
		message = "Not found";
	}

	res.status(statusCode).json({ message, errors });
};

export default errorHandler;
