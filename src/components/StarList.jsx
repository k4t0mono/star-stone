import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import StarForm from './StarForm.jsx';
import getVisibleStars from '../selectors/starSelector.js';


const StarList = (props) => (
	<div>
		<h2>Star List</h2>

		{
			!props.stars.length &&
			<p>No Stars <Link to={'/newStar'}> Go here</Link></p>
		}

		{ props.stars.map((star) => {
			return <StarForm key={ star.id } { ...star } />
		}) }
	</div>
);

const mapStateProps = (state) => {
	console.log('StarList', state);
	return {
		stars: getVisibleStars(state.stars),
	};
}

export default connect(mapStateProps)(StarList);
