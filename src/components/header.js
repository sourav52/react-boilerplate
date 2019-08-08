import React from 'react';
import NavBar from './navbar';
import HeroSection from './hero';

const Header = () =>{
	return (
		<div className="header-wall">
			<NavBar />
			<HeroSection />
		</div>
	);
}

export default Header;