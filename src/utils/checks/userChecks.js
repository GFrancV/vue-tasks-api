import User from "../../models/User";

export default {
	exist: async email => {
		const foundUser = await User.findOne({ email });

		if (foundUser)
			throw {
				statusCode: 400,
				message: "Email already in use",
				errors: { email: ["Email already in use"] },
			};
		else return foundUser;
	},

	credentials: async user => {
		const foundUser = await User.findOne({ email: user.email });

		if (!foundUser) {
			throw {
				statusCode: 400,
				message: "Email not found",
				errors: { email: ["Email not found"] },
			};
		} else {
			const passwordsMatch = await User.comparePassword(user.password, foundUser.password);
			if (!passwordsMatch)
				throw {
					statusCode: 400,
					message: "Password don't match with our records",
					errors: { password: ["Password don't match with our records"] },
				};
			else return { _id: foundUser._id, name: foundUser.name, email: foundUser.email };
		}
	},
};
