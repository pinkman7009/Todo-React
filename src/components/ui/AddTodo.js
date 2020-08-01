import React from 'react';

const AddTodo = ({ onAddTodo, onChangeNewTodo }) => {
	return (
		<div className="new-todo">
			<input type="text" className="add-todo" onChange={onChangeNewTodo} />
			<button className="btn" onClick={onAddTodo}>
				Add Todo
			</button>
		</div>
	);
};

export default AddTodo;
