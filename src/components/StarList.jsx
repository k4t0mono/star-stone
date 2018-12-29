import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveAs } from 'file-saver';

import StarForm from './StarForm.jsx';
import getVisibleStars from '../selectors/starSelector.js';
import { clearStars } from '../actions/starActions.js';


class StarList extends React.Component {

	exportStars = () => {
		const blob = new Blob(
			[JSON.stringify(this.props.stars)],
			{ type: 'application/json;charset=utf-8' }
		);
		saveAs(blob, 'stars.json');
	}

	clearStars = () => {
		this.props.dispatch(clearStars());
	}

	render() {
		const btns = (
			<div>
				<button onClick={ this.clearStars }>Clear</button>
				<button onClick={ this.exportStars }>Export</button>
			</div>
		);

		return (
			<div>
				<h2>Star List</h2>

				{
					this.props.stars.length ?
					btns :
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
