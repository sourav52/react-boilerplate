import React,{ Component } from 'react';

class Heading extends Component{
	constructor(props) {
		super(props);
	}
	
	render(){
		return (
			<h4 className="col-md-12 text-center heading" data-heading={this.props.heading}></h4>
		);
	};
}
export default Heading;