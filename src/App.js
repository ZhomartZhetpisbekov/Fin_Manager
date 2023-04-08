import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import RemainingBudget from './components/Remaining';

const App = () => {
	return (
		<AppProvider>

			<div className='container mt' data-bs-theme="dark" style={{background: 'black', color: 'white', width: '100%', maxWidth: 'unset', height: '100%'}}>
			<h1 className='mt pt-4'>FinManager</h1>
				<div className='row'>
					<div className='col mt-3'>
						<h3 className='ml-3'>Кошелек</h3>	
						<div className='col-sm'>
							<Budget />
						</div>
						<div className='col-sm'>
							<RemainingBudget />
						</div>
						<div className='col-sm'>
							<ExpenseTotal />
						</div>
					</div>
					<div className='col'>
						<h3 className='mt-3'>Затраты</h3>
						<div className='row '>
							<div className='col-sm'>
								<ExpenseList />
							</div>
				
						</div>
					</div>
					</div>
				
				<h3 className='mt-3'>Добавить покупку</h3>
				<div className='row mt-3 justify-content-center'>
					<div className='col-sm'>
						<AddExpenseForm />
					</div>
				</div>
			</div>
		</AppProvider>
	);
};

export default App;
