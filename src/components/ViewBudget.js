import React from 'react';

const ViewBudget = (props) => {
	return (
		<>
			<span>Общий бюджет: {props.budget} KZT</span>
			<button type='button' class='btn btn-outline-primary' onClick={props.handleEditClick}>
				Изменить
			</button>
		</>
	);
};

export default ViewBudget;
