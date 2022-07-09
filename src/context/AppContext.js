import { createContext, useReducer,useState } from "react";

//Reducer to perform all necessary actions
const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
                return{
                    ...state,
                    expenses: [...state.expenses, action.payload],
                };
        
        case 'DELETE_EXPENSE':
            return{
                ...state,
                expenses: state.expenses.filter(
                    (expenses) => expenses.id !== action.payload
                ),
            };

            case 'SET_BUDGET':
			return {
				...state,
				budget: action.payload,
			};

        default:
            return state;
    }
}





const initialState ={
    budget: 2000,
    expenses : [
        {id: 12, name: 'shopping', cost: 40},
        {id: 13, name: 'holiday', cost: 400},
        {id: 14, name: 'car expenses', cost: 600},

    ],
};

export const AppContext = createContext();

export const AppProvider = (props) => 
{
    const [budget, setBudget] = useState(2000);
    function getBudget(newBudget) {
        setBudget(newBudget)

    };

    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (<AppContext.Provider value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
        getBudget,
    }}>
        {props.children}
    </AppContext.Provider>)
};

