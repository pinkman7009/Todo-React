const Todo = require('../models/Todo');
const mongoose = require('mongoose');

// @desc Get all todos
// @route GET api/v1/todos
// @access Public
exports.getTodos = async (req, res, next) => {
	try {
		const todos = await Todo.find();

		return res.status(200).json({
			success: true,
			data: todos
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: 'Server error'
		});
	}
};

// @desc Add a todo
// @route POST api/v1/todos
// @access Public
exports.addTodo = async (req, res, next) => {
	try {
		const todo = new Todo({
			text: req.body.text
		});

		await todo.save();
		return res.status(201).json({
			success: true,
			data: todo
		});
	} catch (error) {
		if (error.name === 'ValidationError') {
			const message = Object.values(error.errors).map((val) => val.message);

			res.status(400).json({
				success: false,
				error: message
			});
		} else {
			res.status(500).json({
				success: false,
				error: 'Server error'
			});
		}
	}
};

// @desc Update todo
// @route PUT api/v1/todos/:id
// @access Public
exports.updateTodo = async (req, res, next) => {
	let todo;
	try {
		todo = await Todo.findById(req.params.id);

		todo.text = req.body.text;

		await todo.save();

		return res.status(200).json({
			success: true,
			data: todo
		});
	} catch (error) {
		if (error.name === 'ValidationError') {
			const message = Object.values(error.errors).map((val) => val.message);

			res.status(400).json({
				success: false,
				error: message
			});
		} else {
			res.status(500).json({
				success: false,
				error: 'Server error'
			});
		}
	}
};

// @desc Delete todo
// @route DELETE api/v1/todos/:id
// @access Public
exports.deleteTodo = async (req, res, next) => {
	try {
		const todo = await Todo.findById(req.params.id);
		if (!todo) {
			return res.status(404).json({
				success: false,
				error: 'No todo found'
			});
		}
		await todo.remove();

		return res.status(200).json({
			success: true,
			data: {}
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: 'Server error'
		});
	}
};
