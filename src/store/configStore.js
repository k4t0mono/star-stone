import { createStore, combineReducers } from 'redux';
import filterReducer from '../reducers/filtersReducer';
import starReducer from '../reducers/starReducer';

export default () => {
	const store = createStore(
		combineReducers({
			filter: filterReducer,
			stars: starReducer,
		}),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	return store;
}
