import React, { useRef } from 'react';

const TodoItem = ({ todo, onDeleteTodo, onUpdateTodo }) => {
	const inputRef = useRef(null);

	const focusInput = () => {
		inputRef.current.focus();
	};
	return (
		<li>
			<input
				type="text"
				value={todo}
				ref={inputRef}
				className="todo-item-input"
				onChange={(e) => onUpdateTodo(e.target.value)}
			/>

			<div className="icons">
				<div style={{ cursor: 'pointer' }} onClick={focusInput}>
					Up
				</div>
				<i className="fas fa-trash" style={{ cursor: 'pointer' }} onClick={onDeleteTodo} />
			</div>
		</li>
	);
};

export default TodoItem;
