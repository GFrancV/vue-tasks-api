import { model, Schema } from "mongoose";

const TaskSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
		},
		completed: {
			type: Boolean,
			default: false,
		},
		user_id: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

export default model("Task", TaskSchema);
