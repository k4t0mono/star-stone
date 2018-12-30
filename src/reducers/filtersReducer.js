const defaultState = {
	text: '',
	type: '',
	massH: NaN,
	massL: NaN,
	asc: false,
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
			massL: action.amount,
		}
	
	case 'setMassHigherEnd':
		return {
			...state,
			massH: action.amount
		}

	case 'clearFilters':
		return {
			...defaultState,
		}
	
	case 'clearMassLowerEnd':
		return {
			...state,
			massL: NaN,
		}
	
	case 'clearMassHigherEnd':
		return {
			...state,
			massH: NaN,
		}

	case 'setOrderAsc':
		return {
			...state,
			asc: true,
		}
	
	case 'setOrderDes':
		return {
			...state,
			asc: false,
		}

	default:
		return state;
	}
}

export default filter_reducer;
