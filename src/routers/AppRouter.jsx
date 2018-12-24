// All roads lead to Rome

import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import ExpenseDashboardPage from '../components/ExpenseDashboardPage.jsx';
import EditExpensePage from '../components/EditExpensePage.jsx';
import AddExpensePage from '../components/AddExpensePage.jsx';
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
					component={ ExpenseDashboardPage }
					exact={ true }
				/>

				<Route
					path='/create'
					component={ AddExpensePage }
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
