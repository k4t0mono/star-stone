export const setTextFilter = (text = '') => ({
	type: 'setTextFilter',
	text,
})

export const setTypeFilter = (stype = '') => ({
	type: 'setTypeFilter',
	stype
})

export const setMassRange = ({ op, amount }) => {
	const type = op[0] === '>' ? 'setMassLowerEnd' : 'setMassHigherEnd';

	return {
		type,
		amount,
	}
}
