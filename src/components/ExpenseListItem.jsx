import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const ExpenseListItem = ({ description, amount, created_at, id }) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h3>{ description }</h3>
		</Link>
		<p>{ amount } -- { created_at }</p>
	</div>
);

export default connect()(ExpenseListItem);
