// app.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css'
import './styles/styles.scss';
import AppRouter from './routers/AppRouter.jsx';
import ConfigStore from './store/configStore';


const store = ConfigStore();

console.log(store.getState());

const jsx = (
	<Provider store={ store }>
		<AppRouter />
	</Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
