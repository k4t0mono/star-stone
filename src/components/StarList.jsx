import React from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import StarForm from './StarForm.jsx';
import getVisibleStars from '../selectors/starSelector.js';


class StarList extends React.Component {

	constructor(props) {
		super(props);

		this.stars = props.stars;
		console.log(this.stars.map((s) => s.id));

		this.totalPages = Math.ceil(props.stars.length / 5);
		this.state = {
			page: 1,
			stars: props.stars.slice(0, 5),
			hasNext: true,
			hasPrev: false,
		}
	}

	recalcPage = () => {
		const start = (this.state.page - 1) * 5;
		const end = start + 5;
		const stars = this.stars.slice(start, end);

		this.setState(() => ({ stars }))
	}

	handlePageClick = (args) => {
		this.setState(() => ({
			page: args.selected + 1,
		}), this.recalcPage)
	}

	render() {
		const desc = (
			<p>
				{ this.props.stars.length } of { this.props.total }
				&nbsp; matches the search
			</p>
		);

		return (
			<div>
				<h2>Star List</h2>
				<h3>Page { this.state.page } of { this.totalPages }</h3>

				<ReactPaginate
					pageCount={ this.totalPages }
					pageRangeDisplayed={ 5 }
					marginPagesDisplayed={ 2 }
					onPageChange={ this.handlePageClick }
					containerClassName='pagination'
					activeClassName='pagination active'
				/>

				{
					this.props.total ?
					desc :
					<p>No Stars <Link to={'/newStar'}> Go here</Link></p>
				}

				{ this.state.stars.map((star) => {
					return <StarForm key={ star.id } { ...star } />
				}) }
			</div>
		);
	}

}

const mapStateProps = (state) => {
	return {
		stars: getVisibleStars(state.stars, state.filter),
		total: state.stars.length,
	};
}

export default connect(mapStateProps)(StarList);
