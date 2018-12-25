const starReducer = (state = [], action) => {
	switch (action.type) {
		case 'addStar':
			return [...state, action.star];

		case 'removeStar':
			return state.filter(({ id }) => id !== action.id );

		case 'editStar':
			return state.map((star) => {
				if(star.id == action.id) {
					return {
						...star,
						...action.updates
					}
				}

				return star;
			});

		default:
			return state;
	}
};

export default starReducer;
