import React, { useState } from 'react';
import './App.css';
import TodoList from './components/todos/TodoList';
import AddTodo from './components/ui/AddTodo';
import ErrorMessage from './components/ui/Error';
const App = () => {
	const [ todos, setTodos ] = useState([]);

	const [ newTodo, setNewTodo ] = useState('');

	const [ errorMessage, setErrorMessage ] = useState('');

	// To set value of new todo to be added
	const onChangeNewTodo = (e) => {
		setNewTodo(e.target.value);
	};

	// To add a todo
	const addNewTodo = (e) => {
		if (!newTodo) {
			setErrorMessage("Can't leave field empty");
			return;
		}
		setTodos(todos.concat({ text: newTodo }));
		console.log(todos);
		setErrorMessage('');
		setNewTodo('');
	};

	const updateTodo = (value, index) => {
		setErrorMessage('');
		const copyTodos = [ ...todos ];

		copyTodos[index].text = value;

		setTodos(copyTodos);
	};

	// To delete a todo
	const deleteTodo = (index) => {
		setErrorMessage('');
		const copyTodos = [ ...todos ];

		copyTodos.splice(index, 1);
		setTodos(copyTodos);
	};
	return (
		<div className="container">
			<div className="todo-card">
				<h1 style={{ color: '#6a2c70' }}>Todo List</h1>

				<AddTodo onAddTodo={addNewTodo} onChangeNewTodo={onChangeNewTodo} query={newTodo} />

				{errorMessage && <ErrorMessage message={errorMessage} />}
				{todos && <TodoList todos={todos} onDeleteTodo={deleteTodo} onUpdateTodo={updateTodo} />}
			</div>
		</div>
	);
};

export default App;
