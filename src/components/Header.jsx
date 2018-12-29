import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
	<header>
		<h1>Star Stone</h1>

		<NavLink to='/' activeClassName='isActive' exact={true}>Dashboard</NavLink>
		<NavLink to='/generate' activeClassName='isActive'>Generate</NavLink>
		<NavLink to='/newStar' activeClassName='isActive'>New Star</NavLink>
		<NavLink to='/help' activeClassName='isActive'>Help</NavLink>
	</header>
);

export default Header;
