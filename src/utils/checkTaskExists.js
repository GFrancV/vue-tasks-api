import Task from "../models/Task";

const checkTaskExists = async (_id, user_id) => {
	const taskFound = await Task.findOne({ _id, user_id });

	if (!taskFound)
		throw {
			statusCode: 404,
			message: "Task not found",
		};
	else return taskFound;
};

export default checkTaskExists;
