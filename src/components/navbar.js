import React from 'react';
import SearchBar from './searchbar';

const NavBar = () =>{
	return (
		<nav className="navbar navbar-toggleable-md navbar-light">
		  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
		    <ul className="navbar-nav">
		      <li className="nav-item active">
		        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" href="#">About Me</a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" href="#">Post</a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" href="#">Contact</a>
		      </li>
		      <li className="nav-item">
		      	<SearchBar />
		      </li>
		    </ul>
		  </div>
		</nav>
	);
}

export default NavBar;