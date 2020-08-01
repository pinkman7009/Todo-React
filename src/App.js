import React, { useState } from 'react';
import './App.css';
import TodoList from './components/todos/TodoList';
import AddTodo from './components/ui/AddTodo';
import ErrorMessage from './components/ui/Error';
const App = () => {
	const [ todos, setTodos ] = useState([]);

	const [ newTodo, setNewTodo ] = useState('');

	const [ errorMessage, setErrorMessage ] = useState('');

	const onChangeNewTodo = (e) => {
		setNewTodo(e.target.value);
	};
	const addNewTodo = (e) => {
		if (!newTodo) {
			setErrorMessage('Cant leave field empty');
			return;
		}
		setTodos(todos.concat(newTodo));
		setErrorMessage('');
		setNewTodo('');
	};
	return (
		<div className="container">
			<div className="todo-card">
				<h1>Todo List</h1>

				<AddTodo onAddTodo={addNewTodo} onChangeNewTodo={onChangeNewTodo} query={newTodo} />

				<ErrorMessage message={errorMessage} />
				<TodoList todos={todos} />
			</div>
		</div>
	);
};

export default App;
