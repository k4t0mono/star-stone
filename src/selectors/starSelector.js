const getVisibleStars = (stars, { text, type, mass }) => {
	return stars.filter((star) => {
		const idMatch = star.id.toLowerCase().includes(text.toLowerCase());
		const nameMatch = star.name.toLowerCase().includes(text.toLowerCase());
		const textMatch = idMatch || nameMatch

		const matchType = star.type.toLowerCase().includes(type.toLowerCase());

		const matchMassLow = star.mass > mass.lower;

		return textMatch && matchType && matchMassLow;
	});
};

export default getVisibleStars;
