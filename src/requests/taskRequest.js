import Joi from "joi";

const taskRequest = Joi.object({
	title: Joi.string().max(50).required(),
	description: Joi.string().max(255),
	completed: Joi.boolean(),
});

export default taskRequest;
