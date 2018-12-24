export const set_text_filter = (text = '') => ({
	type: 'set_text_filter',
	text,
});

export const sort_by_amount = () => ({
	type: 'sort_by_amount'
});

export  const sort_by_date = () => ({
	type: 'sort_by_date'
});

export const set_start_date = (start_date) => ({
	type: 'set_start_date',
	start_date,
});

export const set_end_date = (end_date) => ({
	type: 'set_end_date',
	end_date,
});
