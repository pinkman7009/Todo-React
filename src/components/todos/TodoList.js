import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDeleteTodo, onUpdateTodo }) => {
	const display = todos.length === 0 ? 'none' : 'block';

	const todoListStyle = {
		width: '100%',
		height: '100%',
		padding: '1rem',
		display: display
	};

	return (
		<ul style={todoListStyle}>
			{todos.map((todo, index) => {
				return (
					<TodoItem
						key={index}
						todo={todo}
						display={display}
						onDeleteTodo={() => onDeleteTodo(index)}
						onUpdateTodo={(value) => {
							onUpdateTodo(value, index);
						}}
					/>
				);
			})}
		</ul>
	);
};

export default TodoList;
