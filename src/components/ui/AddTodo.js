import React from 'react';

const AddTodo = ({ onAddTodo, onChangeNewTodo, query }) => {
	return (
		<div className="new-todo">
			<input type="text" className="add-todo" onChange={onChangeNewTodo} value={query} autoFocus />
			<button className="btn" onClick={onAddTodo}>
				Add Todo
			</button>
		</div>
	);
};

export default AddTodo;
