import moment from 'moment';

// get_visible_expenses

const get_visible_expenses = (expenses, { text, sort_by, start_date, end_date }) => {
	return expenses.filter((expense) => {
		const created_at = moment(expense.created_at);

		const start_date_match = start_date ? start_date.isSameOrBefore(created_at, 'day') : true;

		const end_date_match = end_date ? end_date.isSameOrAfter(created_at, 'day') : true;

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

export default get_visible_expenses;