// All roads lead to Rome

import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import DashboardPage from '../components/DashboardPage.jsx';
import EditStarPage from '../components/EditStarPage.jsx';
import NewStarPage from '../components/NewStarPage.jsx';
import GenerateStarsPage from '../components/GenerateStarsPage.jsx';
import HelpPage from '../components/HelpPage.jsx';
import NotFoundPage from '../components/NotFoundPage.jsx';
import Header from '../components/Header.jsx';
import GenerateMapPage from '../components/GenerateMapPage.jsx';


const AppRouter = () => (
	<HashRouter basename={ process.env.PUBLIC_URL }>
		<div>
			<Header />
			<Switch>
				<Route
					path='/'
					component={ DashboardPage }
					exact={ true }
				/>

				<Route
					path='/newStar'
					component={ NewStarPage }
				/>

				<Route
					path='/generate'
					component={ GenerateStarsPage }
				/>

				<Route
					path='/map'
					component={ GenerateMapPage }
				/>

				<Route
					path='/edit/:id'
					component={ EditStarPage }
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
	</HashRouter>
);

export default AppRouter;
