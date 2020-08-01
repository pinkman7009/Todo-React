import React, { useState } from 'react';
import './App.css';
import TodoList from './components/todos/TodoList';
import AddTodo from './components/ui/AddTodo';

const App = () => {
	const [ todos, setTodos ] = useState([ 'Pick up groceres', 'Code for 5 hours' ]);

	const [ newTodo, setNewTodo ] = useState('');

	const onChangeNewTodo = (e) => {
		setNewTodo(e.target.value);
	};
	const addNewTodo = (e) => {
		setTodos(todos.concat(newTodo));
	};
	return (
		<div className="container">
			<div className="todo-card">
				<h1>Todo List</h1>

				<AddTodo onAddTodo={addNewTodo} onChangeNewTodo={onChangeNewTodo} />

				<TodoList todos={todos} />
			</div>
		</div>
	);
};

export default App;
