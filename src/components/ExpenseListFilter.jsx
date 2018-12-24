import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize'

import {
	set_text_filter,
	sort_by_amount,
	sort_by_date,
	set_start_date,
	set_end_date,
} from '../actions/filters.js';


const setFilter = (value, dispatch) => {
	if(value === 'date')
		dispatch(sort_by_date());
	else if(value === 'amount')
		dispatch(sort_by_amount());
	
};

class ExpenseListFilter extends React.Component {
	state = {
		calendar_focused: null,
	}

	onDatesChange = ({ startDate, endDate }) => {
		this.props.dispatch(set_start_date(startDate));
		this.props.dispatch(set_end_date(endDate));
	}

	onCalendarFocusChange = (calendar_focused) => {
        this.setState(() => ({ calendar_focused }))
    }

	render() {
		console.log('props', this.props);
		return (
			<div>
				<input
					type='text'
					value={ this.props.filter.text }
					onChange={ (e) => {
						props.dispatch(set_text_filter(e.target.value));
					}}
				/>
		
				<select
					value={ this.props.filter.sort_by }
					onChange={ (e) => setFilter(e.target.value, this.props.dispatch) }
				>
					<option value="date">Date</option>
					<option value="amount">Amount</option>
				</select>

				<DateRangePicker
					startDate={ this.props.filter.start_date }
					startDateId={ 'weads' }
					endDate={ this.props.filter.end_date }
					endDateId={ 'weads2' }
					focusedInput={ this.state.calendar_focused }
					onDatesChange={ this.onDatesChange }
					onFocusChange={ this.onCalendarFocusChange }
					numberOfMonths={ 1 }
					isOutsideRange={ () => false }
					showClearDates={ true }
				/>
			</div>
		);
	}
}

const mapStateProps = (state) => {
	return {
		filter: state.filter
	};
};

export default connect(mapStateProps)(ExpenseListFilter);
