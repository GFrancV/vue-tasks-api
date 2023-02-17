import User from "../models/User";

export default {
	getUser: async (req, res, next) => {
		try {
			const foundUser = await User.findById(req.userId, { password: 0 });

			res.json(foundUser);
		} catch (error) {
			next(error);
		}
	},
};
