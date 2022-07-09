import React from 'react';

//Displays "Edit" button in the budget component 
const ViewBudget = (props) => {
	return (
		<>
			<span>Budget: ${props.budget}</span>
			<button style={{background: "#F8F9D7", color: "black"}} type='button' class='btn btn-primary' onClick={props.handleEditClick}>
				Edit
			</button>
		</>
	);
};

export default ViewBudget;