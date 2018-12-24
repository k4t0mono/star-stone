import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const add_expense = ({ description = '', note = '', amount = 0, created_at = 0 }) => ({
	type: 'add_expense',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		created_at,
	}
});

const remove_expense = ({ id } = {}) => ({
	type: 'remove_expense',
	id
});

const edit_expense = (id, updates) => ({
	type: 'edit_expense',
	id,
	updates
});

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


const set_text_filter = (text = '') => ({
	type: 'set_text_filter',
	text,
});

const sort_by_amount = () => ({
	type: 'sort_by_amount'
});

const sort_by_date = () => ({
	type: 'sort_by_date'
});

const set_start_date = (start_date) => ({
	type: 'set_start_date',
	start_date,
});

const set_end_date = (end_date) => ({
	type: 'set_end_date',
	end_date,
});

const filter_default_state = {
	text: '',
	sort_by: 'date',
	start_date: undefined,
	end_date: undefined,
}

const filter_reducer = (state = filter_default_state, action) => {
	switch(action.type) {
	case 'set_text_filter':
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


const get_visible_expenses = (expenses, { text, sort_by, start_date, end_date }) => {
	return expenses.filter((expense) => {
		const start_date_match = (typeof start_date !== 'number')
			|| (expense.created_at >= start_date);

		const end_date_match = (typeof end_date !== 'number')
			|| (expense.created_at <= end_date);

		const text_match = expense.description.toLowerCase()
			.includes(text.toLowerCase());

		return start_date_match && end_date_match && text_match;
	}).sort((a, b) => {
		if(sort_by === 'date')
			return a.created_at < b.created_at ? 1 : 0;

		if(sort_by === 'amount')
		return a.amount < b.amount ? 1 : 0;
	});
};


const store = createStore(
	combineReducers({
		expenses: expenses_reducer,
		filter: filter_reducer,
	})
);

store.subscribe(() => {
	const state = store.getState();

	const ve = get_visible_expenses(state.expenses, state.filter);
	console.log(ve);
});

store.dispatch(add_expense({ description: 'teste', amount: 4267, created_at: 1 }));
store.dispatch(add_expense({ description: 'caipirinha', amount: 1877, created_at: 2 }));

store.dispatch(sort_by_amount())