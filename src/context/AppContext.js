import React, { createContext, useReducer, useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';

export const AppReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
		case 'DELETE_EXPENSE':
			return {
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.id !== action.payload
				),
			};
		case 'EDIT_BUDGET':
		return {
			...state,
			budget: action.payload,
		};
		case 'SET_BUDGET':
			return {
				...state,
				budget: action.payload,
			};
		case 'SET_EXPENSES':
			return {
				...state,
				expenses: action.payload
			};

		default:
			return state;
	}
};


const initialState = {
  expenses: [],
  budget: 0
};



export const AppContext = createContext();

export const AppProvider = (props) => {

	const [state, dispatch] = useReducer(AppReducer, initialState);

	const addExpense = (expense) => {
		fetch('http://localhost:5000/expenses', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(expense)
		})
			.then(response => response.json())
			.then(data => {
				dispatch({ type: 'SET_EXPENSES', payload: [...state.expenses, data] });
			})
			.catch(error => console.log(error));
	};
	
	const deleteExpense = (id) => {
		fetch(`http://localhost:5000/expenses/${id}`, {
			method: 'DELETE'
		})
			.then(() => {
				dispatch({ type: 'DELETE_EXPENSE', payload: id });
			})
			.catch(error => console.log(error));
	};



	useEffect(() => {
    fetch('http://localhost:5000/expenses')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'SET_EXPENSES', payload: data });
      })
      .catch(error => console.log(error));

    fetch('http://localhost:5000/budget')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'SET_BUDGET', payload: data.value });
      })
      .catch(error => console.log(error));
  }, []);

	// 5. Returns our context. Pass in the values we want to expose
	return (
		<AppContext.Provider
			value={{
				expenses: state.expenses,
				budget: state.budget,
				dispatch,
				addExpense,
				deleteExpense
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};
