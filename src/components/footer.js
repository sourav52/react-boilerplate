import React,{ Component } from 'react';
import SearchBar from './searchbar';

export default class Footer extends Component{
	render(){
		return (
			<div className="container footer">
				<div className="row">
					<div className="col-md-12 text-center">
						<ul className="footer-navbar">
					      <li className="nav-item">
					        <a className="" href="#">Home</a>
					      </li>
					      <li className="nav-item">
					        <a className="" href="#">About Me</a>
					      </li>
					      <li className="nav-item">
					        <a className="" href="#">Post</a>
					      </li>
					      <li className="nav-item">
					        <a className="" href="#">Contact</a>
					      </li>
					      <li className="nav-item">
					      	<SearchBar />
					      </li>
						</ul>
					</div>
					<div className="col-md-12 text-center social-list">
						<ul className="footer-navbar">
					      <li className="social-item">
					        <a className="social-link" href="#">
					        	<i className="fa fa-facebook-square" aria-hidden="true"></i>
					        </a>
					      </li>
					      <li className="social-item">
					        <a className="social-link" href="#">
					        	<i className="fa fa-quora" aria-hidden="true"></i>
					        </a>
					      </li>
					      <li className="social-item">
					        <a className="social-link" href="#">
					        	<i className="fa fa-github-square" aria-hidden="true"></i>
					        </a>
					      </li>
					      <li className="social-item">
					        <a className="social-link" href="#">
					        	<i className="fa fa-instagram" aria-hidden="true"></i>
					        </a>
					      </li>
					      <li className="social-item">
					        <a className="social-link" href="#">
					        	<i className="fa fa-youtube-square" aria-hidden="true"></i>
					        </a>
					      </li>
						</ul>
					</div>
					<div className="col-md-12 text-center">
						Copyright <i className="fa fa-copyright" aria-hidden="true"></i> 2017.By Sourav Dash
					</div>
				</div>
			</div>
		);
	};
}