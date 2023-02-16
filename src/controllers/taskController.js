import Task from "../models/Task";

export const taskController = {
	getTasks: async (req, res) => {
		const tasks = await Task.find();

		res.json(tasks);
	},

	getTask: async (req, res) => {
		const taskId = req.params.id;

		const task = await Task.findById(taskId);

		res.json(task);
	},

	createTask: async (req, res) => {
		const { title, description } = req.body;

		const newTask = new Task({ title, description, user_id: "63ed10aed1a621837725cfc4" });
		const savedTask = await newTask.save();

		res.status(201).json(savedTask);
	},

	editTask: async (req, res) => {
		const taskId = req.params.id;
		const { title, description, completed } = req.body;

		const editedTask = await Task.findByIdAndUpdate(taskId, { title, description, completed }, { new: true });

		res.json(editedTask);
	},

	deleteTask: async (req, res) => {
		const taskId = req.params.id;

		const deletedTask = await Task.findByIdAndDelete(taskId);

		res.json(deletedTask);
	},
};
