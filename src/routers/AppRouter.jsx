// All roads lead to Rome

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DashboardPage from '../components/DashboardPage.jsx';
import EditExpensePage from '../components/EditExpensePage.jsx';
import GenerateStarPage from '../components/GenerateStarPage.jsx';
import HelpPage from '../components/HelpPage.jsx';
import NotFoundPage from '../components/NotFoundPage.jsx';
import Header from '../components/Header.jsx';


const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route
					path='/'
					component={ DashboardPage }
					exact={ true }
				/>

				<Route
					path='/generate'
					component={ GenerateStarPage }
				/>

				<Route
					path='/edit/:id'
					component={ EditExpensePage }
				/>

				<Route
					path='/help'
					component={ HelpPage }
				/>

				<Route
					component={ NotFoundPage }
				/>
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;
