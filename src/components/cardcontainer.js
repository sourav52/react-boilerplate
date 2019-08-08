import React,{ Component } from 'react';
import PTSearch from 'post-api-search';
import CardItem from './carditem';

class CardContainer extends Component{
	constructor(props) {
		super(props);	

		this.state = { post: [] };

		this.postSearch();
	}

	postSearch() {
		PTSearch({ key: "7a83e25d789c48118c55b21d28db6bea"}, (posts) => {
			this.setState({ 
				post: posts
			});
		});
	}

	renderPost(data){
		return (
			<CardItem postData={data} key={data.author} />
		);
	}

	render(){
		return (
			<div className="card-columns">
				{ this.state.post.map(this.renderPost) }
			</div>
		);
	};
}

export default CardContainer;