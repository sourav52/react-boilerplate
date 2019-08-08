import React,{ Component } from 'react';

class SearchBar extends Component{
	render(){
		return (
		    <form className="form-inline my-2 my-lg-0">
			  <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
			  <div className="input-group mb-2 mr-sm-2 mb-sm-0">
			    <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Search..." />
			    <div className="input-group-addon search-icon">
			    	<i className="fa fa-search" aria-hidden="true"></i>
			    </div>
			  </div>
		    </form>
		);
	};
}

export default SearchBar;