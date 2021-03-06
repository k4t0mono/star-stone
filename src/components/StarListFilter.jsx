import React from 'react';
import { connect } from 'react-redux';

import {
	setTextFilter, setTypeFilter, setMassRange, clearFilters,
	clearMassRange, setOrder
} from '../actions/filtersActions.js';


class StarListFilter extends React.Component {

	state = {
		search: ''
	}

	searchChange = (e) => {
		const search = e.target.value;

		this.setState(() => ({ search }));

		const reProps = /(\w+)(:([<=>]{1,2})(\d+(\.\d+)?))?/;
		const reType = /type:([OBAFGKMobafgkm])/;
		const reOrder = /order:(asc|des)/;

		const searchList = search.split(' ').filter((s) => s != '');

		let matchProps = reProps.exec(searchList[0]);
		if(!searchList[0] || matchProps[1] === searchList[0]) {
			this.props.dispatch(setTextFilter(
				matchProps[1] === 'undefined' ? '' : matchProps[1]
			));
			return;
		}
		console.log(matchProps[1] === searchList[0])
		this.props.dispatch(setTextFilter());
		for(let i = 0; i < searchList.length; i++) {
			const matchType = reType.exec(searchList[i]);
			if(matchType) {
				this.props.dispatch(setTypeFilter(matchType[1]));
				continue;
			} else if(searchList[i].match(/type:/)) {
				this.props.dispatch(setTypeFilter());
				continue
			}

			const matchOrder = reOrder.exec(searchList[i]) 
			if(matchOrder) {
				this.props.dispatch(setOrder(matchOrder[1].toLowerCase()));
				continue;
			} else if(searchList[i].match(/order:/)) {
				this.props.dispatch(setTypeFilter());
				continue
			}


			matchProps = reProps.exec(searchList[i]);
			if(matchProps[4]) {
				const op = matchProps[3];
				const amount = parseFloat(matchProps[4]);
				this.props.dispatch(setMassRange({ op, amount }))

			} else if(searchList[i].match(/mass[:>=]+$/)) {
				this.props.dispatch(clearMassRange('L'));

			} else if(searchList[i].match(/mass[:<=]+$/)) {
				this.props.dispatch(clearMassRange('H'));
			}
		}
	}

	handleClear = (e) => {
		this.setState(
			() => ({ search: '' }),
			() => this.props.dispatch(clearFilters())
		);
	}

	render() {
		return (
			<section>
				<input
					type="text"
					value={ this.state.search }
					onChange={ this.searchChange }
				/>
				<button onClick={ this.handleClear}>Clear</button>
			</section>
		)
	}

}


const mapStateProps = (state) => {
	return { filter: state.filter };
}


export default connect(mapStateProps)(StarListFilter);
