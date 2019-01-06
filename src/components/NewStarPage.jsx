import React from 'react';
import { connect } from 'react-redux';

import StarForm from './StarForm.jsx';
import { addStar } from '../actions/starActions.js';
import { genId } from '../backend/utils.js';


const NewStarPage = (props) => (
	<div>
		<h2>New Star</h2>
		<StarForm
			editable={ true }
			onSubmit={(star) => {
				const id = genId();
				props.dispatch(addStar({ id, ...star }));
				props.history.push('/');
			}}
		/>
	</div>
);


export default connect()(NewStarPage);
