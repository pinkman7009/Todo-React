import React from 'react';

const TodoItem = ({ todo, onDeleteTodo }) => {
	return (
		<li>
			{todo}
			<i className="fas fa-trash" style={{ cursor: 'pointer' }} onClick={onDeleteTodo} />
		</li>
	);
};

export default TodoItem;
