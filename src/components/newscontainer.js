import React from 'react';
import Heading from './heading';
import CardContainer from './cardcontainer';

const NewsContainer = () =>{
	return (
		<div className="container">
			<Heading heading="Recent News" />
			<CardContainer />
		</div>
	);
}

export default NewsContainer;