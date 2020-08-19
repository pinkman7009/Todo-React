const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
	text: {
		type: String,
		trim: true,
		required: [ true, 'Please add some text to do your todo' ]
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Todos', TodoSchema);
