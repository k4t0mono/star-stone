const filter_default_state = {
	text: 'sun',
}

const filter_reducer = (state = filter_default_state, action) => {
	switch(action.type) {
	case 'setTextFilter':
		return {
			...state,
			text: action.text,
		}

	case 'sort_by_amount':
		return {
			...state,
			sort_by: 'amount',
		}

	case 'set_start_date':
		return {
			...state,
			start_date: action.start_date,
		}

	case 'set_end_date':
		return {
			...state,
			end_date: action.end_date,
		}

	default:
		return state;
	}
}

export default filter_reducer;
