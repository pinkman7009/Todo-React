import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/todos/TodoList';
import AddTodo from './components/ui/AddTodo';
import ErrorMessage from './components/ui/Error';
import axios from 'axios';
const App = () => {
	const [ todos, setTodos ] = useState([]);

	const [ newTodo, setNewTodo ] = useState('');

	const [ errorMessage, setErrorMessage ] = useState('');

	useEffect(() => {
		const getTodos = async () => {
			const result = await axios.get('/api/v1/todos');

			setTodos(result.data.data);
		};
		getTodos();
	}, []);

	// To set value of new todo to be added
	const onChangeNewTodo = (e) => {
		setNewTodo(e.target.value);
	};

	// To add a todo
	const addNewTodo = async (e) => {
		if (!newTodo) {
			setErrorMessage("Can't leave field empty");
			return;
		}
		setTodos(todos.concat({ text: newTodo }));

		const config = {
			headers: {
				'Content-type': 'application/json'
			}
		};

		const todoNew = {
			text: newTodo
		};

		const res = await axios.post('/api/v1/todos', todoNew, config);

		setErrorMessage('');
		setNewTodo('');
	};

	const updateTodo = async (value, index) => {
		setErrorMessage('');
		const copyTodos = [ ...todos ];

		copyTodos[index].text = value;
		const config = {
			headers: {
				'Content-type': 'application/json'
			}
		};

		const todoUpdated = {
			text: value
		};

		const res = await axios.put(`/api/v1/todos/${copyTodos[index]._id}`, todoUpdated, config);

		setTodos(copyTodos);
	};

	// To delete a todo
	const deleteTodo = async (index) => {
		setErrorMessage('');
		const copyTodos = [ ...todos ];

		const delID = copyTodos[index]._id;
		copyTodos.splice(index, 1);

		await axios.delete(`/api/v1/todos/${delID}`);
		setTodos(copyTodos);
	};
	return (
		<div className="container">
			<div className="todo-card">
				<h1 style={{ color: '#fff', fontWeight: '300' }}>Todo List</h1>

				<AddTodo onAddTodo={addNewTodo} onChangeNewTodo={onChangeNewTodo} query={newTodo} />

				{errorMessage && <ErrorMessage message={errorMessage} />}
				{todos && <TodoList todos={todos} onDeleteTodo={deleteTodo} onUpdateTodo={updateTodo} />}
			</div>
			<div className="modal-bg">
				<div className="modal">
					<h2>Update Todo</h2>

					<input type="text" for="todo" />
					<button>Update</button>
				</div>
			</div>
		</div>
	);
};

export default App;
