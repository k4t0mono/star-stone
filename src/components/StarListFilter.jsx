import React from 'react';
import { connect } from 'react-redux';

import {
	setTextFilter, setTypeFilter
} from '../actions/filtersActions.js';


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

		for(let i = 1; i < searchList.length; i++) {
			const matchType = reType.exec(searchList[i]);

			if(matchType) {
				this.props.dispatch(setTypeFilter(matchType[1]));
			}
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
