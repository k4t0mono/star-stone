// app.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css'
import './styles/styles.scss';
import AppRouter from './routers/AppRouter.jsx';
import ConfigStore from './store/configStore';
import { addStar } from './actions/starActions.js';
import { genNStars } from './backend/genStar.js'


const store = ConfigStore();


for(let star of genNStars(10)) {
	store.dispatch(addStar({ name: '', ...star }));
}

const jsx = (
	<Provider store={ store }>
		<AppRouter />
	</Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
