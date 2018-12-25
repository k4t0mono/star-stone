import { genId } from '../backend/utils.js';

export const addStar = (star) => ({
	type: 'addStar',
	star: {
		id: genId(),
		...star
	},
});

export const removeStar = ({ id }) => ({
	type: 'removeStar',
	id,
});

export const editStar = (id, updates) => ({
	type: 'editStar',
	id,
	updates,
});
