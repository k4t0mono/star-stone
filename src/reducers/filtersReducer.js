const filter_default_state = {
	text: 'sun',
	type: '',
}

const filter_reducer = (state = filter_default_state, action) => {
	switch(action.type) {
	case 'setTextFilter':
		return {
			...state,
			text: action.text,
		}

	case 'setTypeFilter':
		return {
			...state,
			type: action.stype,
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
