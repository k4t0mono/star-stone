import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
	<header>
		<h1>Star Stone</h1>

		<NavLink to='/' activeClassName='isActive' exact={true}>Dashboard</NavLink>
		<NavLink to='/stars' activeClassName='isActive'>Star List</NavLink>
		<NavLink to='/generate' activeClassName='isActive'>Generate</NavLink>
		<NavLink to='/map' activeClassName='isActive'>Map</NavLink>
		<NavLink to='/newStar' activeClassName='isActive'>New Star</NavLink>
		<NavLink to='/help' activeClassName='isActive'>Help</NavLink>
	</header>
);

export default Header;
