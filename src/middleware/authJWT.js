import jwt from "jsonwebtoken";

const createToken = userId => {
	return jwt.sign({ id: userId }, process.env.SECRET_KEY, { expiresIn: 1200 });
};

const verifyToken = (req, res, next) => {
	const bearerHeader = req.headers.authorization;

	if (typeof bearerHeader === "undefined") throw { statusCode: 401, message: "Unauthorized" };

	const token = bearerHeader.split(" ")[1];
	if (!token) throw { statusCode: 401, message: "Unauthorized" };

	const decodeToken = jwt.verify(token, process.env.SECRET_KEY);
	req.userId = decodeToken.id;

	next();
};

export { createToken, verifyToken };
