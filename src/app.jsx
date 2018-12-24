// app.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css'
import './styles/styles.scss';
import AppRouter from './routers/AppRouter.jsx';
import ConfigStore from './store/configStore';
import { add_expense } from './actions/expenses';


const store = ConfigStore();
// store.dispatch(add_expense({ description: 'Vodka bb', amount: 659 }));
// store.dispatch(add_expense({ description: 'Caramelo bb', created_at: 345 }));
// store.dispatch(add_expense({ description: 'Dadinho dd', amount: 1053 }));

const jsx = (
	<Provider store={ store }>
		<AppRouter />
	</Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));