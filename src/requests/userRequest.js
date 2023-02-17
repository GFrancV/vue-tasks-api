import Joi from "joi";

const userRequest = Joi.object({
	email: Joi.string().max(50).required(),
	password: Joi.string().min(8).required(),
});

export default userRequest;
