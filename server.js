const express = require('express');
const dotenv = require('dotenv');
const todosRouter = require('./routes/todos');
const connectDB = require('./config/db');
const { connect } = require('mongoose');

dotenv.config({ path: './config/config.env' });

const app = express();

connectDB();

// Middlewares
app.use(express.json());
app.use('/api/v1/todos', todosRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server has been started in ${process.env.NODE_ENV} on PORT ${PORT}`);
});
