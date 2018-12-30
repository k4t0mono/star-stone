const getVisibleStars = (stars, { text, type, massH, massL }) => {
	return stars.filter((star) => {
		const idMatch = star.id.toLowerCase().includes(text.toLowerCase());
		const nameMatch = star.name.toLowerCase().includes(text.toLowerCase());
		const textMatch = idMatch || nameMatch

		const matchType = star.type.toLowerCase().includes(type.toLowerCase());

		const matchMassLow = massL ? star.mass > massL : true;
		const matchMassHigh = massH ? star.mass < massH : true;
		const matchMass = matchMassLow && matchMassHigh;

		return textMatch && matchType && matchMass;
	});
};

export default getVisibleStars;
