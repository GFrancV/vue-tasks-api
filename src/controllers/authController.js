import { createToken } from "../middleware/authJWT";

import User from "../models/User";
import userRegisterRequest from "../requests/userRegisterRequest";
import userRequest from "../requests/userRequest";
import check from "../utils/checks";
import validate from "../utils/validate";

export const authController = {
	login: async (req, res, next) => {
		try {
			const user = req.body;

			validate(userRequest, user);

			const authUser = await check.user.credentials(user);

			const token = createToken(authUser._id);

			res.status(200).json({ token, user: authUser });
		} catch (error) {
			next(error);
		}
	},

	register: async (req, res, next) => {
		try {
			const user = req.body;

			validate(userRegisterRequest, user);

			await check.user.exist(user.email);

			const newUser = new User({
				name: user.name,
				email: user.email,
				password: await User.encryptPassword(user.password),
			});

			await newUser.save();

			const token = createToken(newUser._id);

			res.status(201).json({ token, user: { _id: newUser._id, name: newUser.name, email: newUser.email } });
		} catch (error) {
			next(error);
		}
	},
};
