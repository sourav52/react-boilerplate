import React,{ Component } from 'react';

export default class NewsLetter extends Component{
	render(){
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12 subscribe-container">
						<div className="col-md-10 subscribe">
							<div className="row">
								<div className="col-md-6 text-right">
									<h3 className="newsletter-heading">Sign up for newsletter</h3>
								</div>
								<div className="col-md-6">
									<form className="form-inline">
									  <div className="input-group subscribe-form mb-2 mr-sm-2 mb-sm-0">
									    <input type="text" className="form-control subscribe-input remove-radius" id="" placeholder="Your Email Address.." />
									  	<button type="submit" className="btn btn-primary subscribe-button remove-radius">Submit</button>
									  </div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};
}