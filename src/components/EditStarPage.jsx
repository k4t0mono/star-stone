import React from 'react';
import { connect} from 'react-redux';

import StarForm from './StarForm.jsx';
import { editStar } from '../actions/starActions.js';


const EditStarPage = (props) => {
	return (
		<div>
			<StarForm
				editable={ true }
				key={ props.star.id }
				onSubmit={ (star) => {
					props.dispatch(editStar(props.star.id, star));
					props.history.push('/');
				} }
				{ ...props.star }
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
		star: state.stars.find((ex) => ex.id === props.match.params.id)
	}
}

export default connect(mapStateProps)(EditStarPage);
