import { createStore, combineReducers } from 'redux';
import filter_reducer from '../reducers/filters';
import starReducer from '../reducers/starReducer';

export default () => {
	const store = createStore(
		combineReducers({
			filter: filter_reducer,
			stars: starReducer,
		}),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	return store;
}
