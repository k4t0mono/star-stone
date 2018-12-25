import React from 'react';
import { connect } from 'react-redux';

import StarCard from './StarCard.jsx';
import { add_expense } from '../actions/expenses';


const AddExpensePage = (props) => (
	<div>
		<h1>Generate Star</h1>
		<StarCard
			editable={ true }
		/>
		{/*
		<StarForm
			onSubmit={ (expense) => {
				props.dispatch(add_expense(expense));
				props.history.push('/');
			} }
		/>
		*/}
	</div>
);


export default connect()(AddExpensePage);
