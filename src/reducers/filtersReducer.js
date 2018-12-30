const defaultState = {
	text: '',
	type: '',
	mass: {
		lower: 0,
	}
}

const filter_reducer = (state = defaultState, action) => {
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

	case 'setMassLowerEnd':
		return {
			...state,
			mass: {
				lower: action.amount,
			}
		}

	case 'clearFilters':
		return {
			...defaultState,
		}

	default:
		return state;
	}
}

export default filter_reducer;
