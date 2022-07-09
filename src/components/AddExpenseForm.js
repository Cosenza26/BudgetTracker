import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import {v4 as uuidv4} from 'uuid';
import '../index.css';


// Displays form to add new expense

const AddExpenseForm = () => {
    //
    const {dispatch} = useContext(AppContext);
    //
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        
        // gives unique id to the object to map over it when displaying all expenses
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseFloat(cost),
        }

        //action 

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        })
    };

    //form that gets name and cost of the expense after clicking "Save" button
    
    return(
        <form onSubmit={onSubmit}>
            <div className="row">
               <div className="col-sm">
                    <label for='name' style={{ color: '#B2C8DF'}} > Name</label>
                    
                    
                    <input 
                        required='required' 
                        type='text' 
                        className="form-control form-color"
                        id='name'
                        value={name}
                        style={{background: '#C4D7E0'}}
                        onChange={(event) => setName(event.target.value)}
                    ></input>

                </div> 
                <div className="col-sm">
                    <label style={{ color: '#B2C8DF'}} for='cost'>cost</label>
                    <input
                        required='required'
                        type="text"
                        className="form-control form-color"
                        style={{background: '#C4D7E0'}}
                        id = 'cost'
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}
                    ></input>
                </div>
                <div className="col-sm expense-form-button">
                    <button type="submit" className="btn mt-4" style={{background: "#F8F9D7", color: "black"}}>Save</button>
                </div>
            </div>
        </form>
    );
};

export default AddExpenseForm;