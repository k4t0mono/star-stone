// Expenses Reducers

const expenses_reducer = (state = [], action) => {
	switch (action.type) {
	case 'add_expense':
		return [...state, action.expense];

	case 'remove_expense':
		return state.filter(({ id }) => id !== action.id );

	case 'edit_expense':
		return state.map((expense) => {
			if(expense.id == action.id)
				return {
					...expense,
					...action.updates,
				}

			return expense
		});

	default:
		return state;
	}
}

export default expenses_reducer;