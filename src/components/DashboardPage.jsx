import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveAs } from 'file-saver';

import StarListFilter from './StarListFilter.jsx';
import StarList from './StarList.jsx';
import { clearStars, addStar } from '../actions/starActions.js';


class DashboardPage extends React.Component {

	constructor(props) {
		super(props);

		const dt = { stars: this.props.stars }
		this.state = {
			data: JSON.stringify(dt, null, 4)
		}
	}

	exportStars = () => {
		const data = { stars: this.props.stars }
		const jsonString = JSON.stringify(data, null, 4);
		const blob = new Blob(
			[ jsonString ],
			{ type: 'application/json;charset=utf-8' }
		);
		saveAs(blob, 'stars.json');
	}

	clearStars = () => {
		this.props.dispatch(clearStars());
		this.setState(() => ({ data: '' }));
	}

	handleSelectedFile = (e) => {
		const file = e.target.files[0];
		console.log(file);
		const loaded = 0;

		this.setState(() => ({ file, loaded }))
	}

	ondataChange = (e) => {
		const data = e.target.value;

		this.setState(() => ({ data }))
	}

	importStars = (e) => {
		const data = JSON.parse(this.state.data);

		this.props.dispatch(clearStars());
		for(let star of data.stars) {
			this.props.dispatch(addStar(star));
		}
	}

	render() {
		const importDiv = (
			<div>
				<textarea
					onChange={ this.ondataChange }
					value={ this.state.data }
					cols='40'
					rows='5'
				></textarea>

				<button onClick={ this.importStars }>Import</button>
			</div>
		)

		const exportDiv = (
			<div>
				<button onClick={ this.clearStars }>Clear</button>
				<button onClick={ this.exportStars }>Export</button>
			</div>
		);

		const someStars = (
			<div>
				<p>You have { this.props.total } stars on the map.</p>
				{ exportDiv }
			</div>
		);

		const noneStars = (
			<p>
				You don't have stars. Go &nbsp;
				<span><Link to='/generate'>generate some</Link></span> &nbsp;
				or &nbsp;
				<span><Link to='/newStar'>create by hand.</Link></span> &nbsp;
			</p>
		);

		return (
			<div>
				{ importDiv }
				{ this.props.total ? someStars : noneStars }
			</div>
		);
	}

};

const mapStateProps = (state) => {
	return {
		stars: state.stars,
		total: state.stars.length,
	}
}

export default connect(mapStateProps)(DashboardPage);
