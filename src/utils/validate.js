/*
{
  "message": "The password must be at least 8 characters.",
  "errors": {
    "password": [
      "The password must be at least 8 characters."
    ]
  }
}
*/
const validate = (schemaRequest, data) => {
	const resultValidation = schemaRequest.validate(data, { abortEarly: false });

	if (resultValidation.error) {
		const errors = {};

		resultValidation.error.details.forEach(error => {
			const { message, path } = error;
			errors[path] = [message.replace(/['"]/g, "")];
		});

		const customError = {
			statusCode: 400,
			message: "Validation error. Please check the info and try again",
			errors,
		};

		throw customError;
	}
};

export default validate;
