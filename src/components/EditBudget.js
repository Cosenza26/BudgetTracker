import React, { useState } from 'react';


// Allows to edit initialize budget
const EditBudget = (props) => {
	const [value, setValue] = useState(props.budget);

	//Displays form for the new budget
	//Saves new amount after clicking 'Save' Button 
	return (
		<>
			<input
				required='required'
				type='number'
				class='form-control mr-3'
				id='name'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
			<button
				type='button'
				class='btn btn-primary'
				onClick={() => props.handleSaveClick(value)}
				style={{background: "#F8F9D7", color: "black"}}
			>
				Save
			</button>
		</>
	);
};

export default EditBudget;