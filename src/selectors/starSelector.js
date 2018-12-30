const getVisibleStars = (stars, { text, type }) => {
	return stars.filter((star) => {
		const idMatch = star.id.toLowerCase().includes(text.toLowerCase());
		const nameMatch = star.name.toLowerCase().includes(text.toLowerCase());
		const textMatch = idMatch || nameMatch

		const matchType = star.type.toLowerCase().includes(type.toLowerCase());

		return textMatch && matchType;
	});
};

export default getVisibleStars;
