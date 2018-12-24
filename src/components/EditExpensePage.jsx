import React from 'react';
import { connect} from 'react-redux';

import ExpenseForm from './ExpenseForm.jsx';
import { edit_expense } from '../actions/expenses.js';
import { remove_expense }  from '../actions/expenses.js';


const EditExpensePage = (props) => {
	return (
		<div>
			<ExpenseForm
				expense={ props.expense }
				onSubmit={ (ex) => {
					props.dispatch(edit_expense(props.expense.id, ex));
					props.history.push('/');
				} }
			/>

			<button onClick={ () => {
				props.dispatch(remove_expense({ id: props.expense.id }));
				props.history.push('/');
			} }
			>
				Remove
			</button>
		</div>
	)
};

const mapStateProps = (state, props) => {
	return {
		expense: state.expenses.find((ex) => ex.id === props.match.params.id)
	}
}

export default connect(mapStateProps)(EditExpensePage);
