import React, { useState } from 'react';
import './App.css';
import TodoList from './components/todos/TodoList';
import AddTodo from './components/ui/AddTodo';

const App = () => {
	const [ todos, setTodos ] = useState([ 'Pick up groceres', 'Code for 5 hours' ]);

	return (
		<div className="container">
			<div className="todo-card">
				<h1>This is a TodoList</h1>
				<AddTodo />
				<TodoList todos={todos} />
			</div>
		</div>
	);
};

export default App;
