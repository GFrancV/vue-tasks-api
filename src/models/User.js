import { model, Schema } from "mongoose";

const UserSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

export default model("User", UserSchema);
