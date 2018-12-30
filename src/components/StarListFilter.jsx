import React from 'react';
import { connect } from 'react-redux';

import { setTextFilter } from '../actions/filtersActions.js';


class StarListFilter extends React.Component {

	state = {
		search: "sun"
	}

	searchChange = (e) => {
		const search = e.target.value;

		this.setState(() => ({ search }));

		const reProps = /(\w+)(:([<=>]{1,2})(\d+(\.\d+)?))?/;
		const reType = /type:([OBAFGKMobafgkm])/;
		const searchList = search.split(' ').filter((s) => s != '');

		if(!searchList[0] || searchList[0].match(reProps)) {
			this.props.dispatch(setTextFilter(searchList[0]));
		}
	}

	render() {
		return (
			<section>
				<input
					type="text"
					value={ this.state.search }
					onChange={ this.searchChange }
				/>
			</section>
		)
	}

}


const mapStateProps = (state) => {
	return { filter: state.filter };
}


export default connect(mapStateProps)(StarListFilter);
