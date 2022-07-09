import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import '../index.css';




const ExpenseItem = (props) => {
    const {dispatch} = useContext(AppContext);


    //Deletes expense when 'X' is clicked.
    const handleDeleteExpense = () => {
        dispatch ({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    // Display one item in the expense list
    return(
        <li className='list-group-item d-flex justify-content-between align-items-center form-color' style={{background: "#C4D7E0", color: "#6E85B7"}}>
            {props.name}
            <div>
                <span className='badge rounded-pill mr-3' style={{background: "#F8F9D7", color: 'black'}}>
                    ${props.cost}
                    
                </span>
                <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
            </div>

        </li>
    );
};

export default ExpenseItem;