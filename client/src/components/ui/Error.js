import React from 'react';

const Error = ({ message }) => {
	const errorStyle = {
		width: '90%',
		background: '#fff',
		color: 'red',
		padding: '0.5rem',
		textAlign: 'center',
		fontWeight: 'bold',
		border: '2px solid red',
		borderRadius: '5px'
	};
	return <div style={errorStyle}>{message}</div>;
};

export default Error;
