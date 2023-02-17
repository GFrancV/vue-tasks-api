import { model, Schema } from "mongoose";
import { compare, hash } from "bcryptjs";

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

UserSchema.statics.encryptPassword = async password => {
	return await hash(password, 10);
};

UserSchema.statics.comparePassword = async (password, hash) => {
	return await compare(password, hash);
};

export default model("User", UserSchema);
