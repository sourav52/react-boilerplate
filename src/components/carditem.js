import React from 'react';
import { Link } from 'react-router';

const CardItem = ({ postData }) =>{
	return (
		<div className="card col-sm-12">
			<img className="card-img-top img-fluid card-img-fluid" src={postData.urlToImage} alt="Card image cap" />
			<div className="card-block">
				<h4 className="card-title">
					<a href={postData.url}>
						{postData.title}
					</a>
				</h4>
				<p className="card-text">{postData.description}</p>
			</div>
		</div>
	);
}

export default CardItem;