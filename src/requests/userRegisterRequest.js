import Joi from "joi";

const userRegisterRequest = Joi.object({
	name: Joi.string().min(6).max(50).required(),
	email: Joi.string().email().max(50).required(),
	password: Joi.string().min(8).required(),
	confirmPassword: Joi.string()
		.valid(Joi.ref("password"))
		.required()
		.messages({ "any.only": "Passwords do not match" }),
});

export default userRegisterRequest;
