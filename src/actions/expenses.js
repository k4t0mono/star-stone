import uuid from 'uuid';

export const add_expense = ({ description = '', note = '', amount = 0, created_at = 0 }) => ({
	type: 'add_expense',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		created_at,
	}
});

export const remove_expense = ({ id } = {}) => ({
	type: 'remove_expense',
	id
});

export const edit_expense = (id, updates) => ({
	type: 'edit_expense',
	id,
	updates
});
