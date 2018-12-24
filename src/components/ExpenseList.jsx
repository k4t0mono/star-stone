import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem.jsx';
import get_visible_expenses from '../selectors/expenses.js';


const ExpenseList = (props) => (
    <div>
        <h2>ExpenseList</h2>
        { props.expenses.map((expense) => {
            return <ExpenseListItem key={ expense.id } { ...expense } />
        }) }
    </div>
);

const mapStatetoProps = (state) => {
    console.log(state);
    return {
        expenses: get_visible_expenses(state.expenses, state.filter),
    }
} 

const ConnectedExpenseList = connect(mapStatetoProps)(ExpenseList);

export default ConnectedExpenseList;