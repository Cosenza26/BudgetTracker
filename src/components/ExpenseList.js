import React, {useContext} from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";
import '../index.css';


// Displays list expense
const ExpenseList = () => {
    const {expenses} = useContext(AppContext);
  

    

    return (
        <form>
            <div className="list-group mr3">
            
                <ul>
                    {expenses.map(((expense) => (
                        <ExpenseItem 
                        id={expense.id} 
                        name={expense.name} 
                        cost={expense.cost}/>
                    )))}
                </ul>
            </div>
        </form>
        
        
    );
};

export default ExpenseList;