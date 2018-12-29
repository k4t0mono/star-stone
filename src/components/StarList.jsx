import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveAs } from 'file-saver';

import StarForm from './StarForm.jsx';
import getVisibleStars from '../selectors/starSelector.js';


class StarList extends React.Component {

	exportStars = () => {
		const blob = new Blob(
			[JSON.stringify(this.props.stars)],
			{ type: 'application/json;charset=utf-8' }
		);
		saveAs(blob, 'stars.json');
	}

	render() {
		return (
			<div>
				<h2>Star List</h2>

				{
					this.props.stars.length ?
					<button onClick={ this.exportStars }>Export</button> :
					<p>No Stars <Link to={'/newStar'}> Go here</Link></p>
				}

				{ this.props.stars.map((star) => {
					return <StarForm key={ star.id } { ...star } />
				}) }
			</div>
		);
	}

}

const mapStateProps = (state) => {
	console.log('StarList', state);
	return {
		stars: getVisibleStars(state.stars),
	};
}

export default connect(mapStateProps)(StarList);
