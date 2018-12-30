export const setTextFilter = (text = '') => ({
	type: 'setTextFilter',
	text,
})

export const setTypeFilter = (stype = '') => ({
	type: 'setTypeFilter',
	stype
})

export const clearFilters = () => ({
	type: 'clearFilters',
})

export const setMassRange = ({ op, amount }) => ({
	type: op[0] === '>' ? 'setMassLowerEnd' : 'setMassHigherEnd',
	amount,
});

export const clearMassRange = (op) => {
	return {
		type: op[0] === 'L' ? 'clearMassLowerEnd' : 'clearMassHigherEnd',
	}
}

export const setOrder = (asc = 'asc') => {
	return {
		type: asc === 'asc' ? 'setOrderAsc' : 'setOrderDes'
	}
}