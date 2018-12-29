export const addStar = (star) => ({
	type: 'addStar',
	star: { ...star },
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

export const clearStars = () => ({
	type: 'clearStars',
});
