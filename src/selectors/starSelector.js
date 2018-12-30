const getVisibleStars = (stars, { text }) => {
	return stars.filter((star) => {
		const idMatch = star.id.toLowerCase().includes(text.toLowerCase());
		const nameMatch = star.name.toLowerCase().includes(text.toLowerCase());
		const textMatch = idMatch || nameMatch

		return textMatch;
	});
};

export default getVisibleStars;
