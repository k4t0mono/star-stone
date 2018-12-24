import React from 'react';

import ExpenseList from './ExpenseList.jsx';
import ExpenseListFilter from './ExpenseListFilter.jsx'; 


const ExpenseDashboardPage = () => (
	<div>
		<ExpenseListFilter />
		<ExpenseList />
	</div>
);


export default ExpenseDashboardPage;
