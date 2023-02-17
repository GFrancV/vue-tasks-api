import Task from "../models/Task";
import taskRequest from "../requests/taskRequest";
import checks from "../utils/checks";
import validate from "../utils/validate";

export const taskController = {
	getTasks: async (req, res, next) => {
		try {
			const tasks = await Task.find({ user_id: "63ed10aed1a621837725cfc4" });

			res.json(tasks);
		} catch (error) {
			next(error);
		}
	},

	getTask: async (req, res, next) => {
		try {
			const taskId = req.params.id;

			const foundTask = await checks.task.exist(taskId, "63ed10aed1a621837725cfc4");

			res.json(foundTask);
		} catch (error) {
			next(error);
		}
	},

	createTask: async (req, res, next) => {
		try {
			const task = req.body;

			validate(taskRequest, task);

			const newTask = new Task({
				title: task.title,
				description: task.description,
				user_id: "63ed10aed1a621837725cfc4",
			});

			await newTask.save();

			res.status(201).json(newTask);
		} catch (error) {
			next(error);
		}
	},

	editTask: async (req, res, next) => {
		try {
			const taskId = req.params.id;
			const task = req.body;

			validate(taskRequest, task);

			const editedTask = await checks.task.exist(taskId, "63ed10aed1a621837725cfc4");

			editedTask.title = task.title;
			editedTask.description = task.description;
			editedTask.completed = task.completed;

			await editedTask.save();

			res.json(editedTask);
		} catch (error) {
			next(error);
		}
	},

	deleteTask: async (req, res, next) => {
		try {
			const taskId = req.params.id;

			const deletedTask = await checks.task.exist(taskId, "63ed10aed1a621837725cfc4");

			await deletedTask.delete();

			res.json(deletedTask);
		} catch (error) {
			next(error);
		}
	},
};
