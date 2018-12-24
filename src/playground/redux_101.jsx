import { createStore } from 'redux';


const incrementCount = ({ amount = 1 } = {}) => ({
	type: 'INCREMENT',
	amount,
});

const decrementCount = ({ amount = 1 } = {}) => ({
	type: 'DECREMENT',
	amount,
});

const setCount = ({ value } = {}) => ({
	type: 'SET',
	value,
});

const resetCount = () => ({
	type: 'RESET',
});

const store = createStore((state = { count: 0 }, action) => {
	switch(action.type) {
		case 'INCREMENT':
			return { count: state.count + action.amount };

		case 'DECREMENT':
			return { count: state.count - action.amount };

		case 'SET':
			return { count: action.value };

		case 'RESET':
			return { count: 0 };

		default:
			return state;
	}
});

const unsubcribe = store.subscribe(() => {
	console.log(store.getState());
});

//unsubcribe();
store.dispatch(incrementCount({ amount: 5 }));
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount({ amount: 10 }));
store.dispatch(setCount({ value: 621 }));
