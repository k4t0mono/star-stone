import React from 'react';
import { connect } from 'react-redux';

import StarForm from './StarForm.jsx';
import { addStar } from '../actions/starActions.js';


const GenerateStarPage = (props) => (
	<div>
		<h1>Generate Star</h1>
		<StarForm
			editable={ true }
			onSubmit={(star) => {
				props.dispatch(addStar(star));
				props.history.push('/');
			}}
			first={ props.first }
		/>
	</div>
);

const mapStateProps = (state) => {
	return {
		first: state.stars.length == 0,
	}
}

export default connect(mapStateProps)(GenerateStarPage);
