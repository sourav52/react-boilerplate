import React,{ Component } from 'react';
import Swipeable from 'react-swipeable';
import $ from 'jquery';
import Heading from './heading';

export default class SliderContainer extends Component{
	constructor(props) {
		super(props);
	}

	swiping(e, deltaX, deltaY, absX, absY, velocity) {
		console.log("You're Swiping...", e, deltaX, deltaY, absX, absY, velocity)
	}

	swipingLeft(e, absX) {
		// console.log("You're Swiping to the Left...", e, absX);
		next();
	}

	swipingRight(e, absX) {
		console.log("You're Swiping to the Right...", e, absX)
	}

	swiped(e, deltaX, deltaY, isFlick, velocity) {
		console.log("You Swiped...", e, deltaX, deltaY, isFlick, velocity)
	}

	prev(){
		var currentLeft = parseInt($('.items').css('left'));
		if (currentLeft<0) {
			console.log(currentLeft);
			$('.items').css('left', (currentLeft + 300) + 'px');
		}
	}

	next(){
		var currentLeft = parseInt($('.items').css('left'));
		var currentWidth = parseInt($('.slide-item').length*300);
		if (-(currentLeft)<=currentWidth) {
			$('.items').css('left', (currentLeft - 300) + 'px');
		}
	}

	render(){
		return (
			<div className="container">
				<Heading heading="Testimonials" />
				<div className="container">
					<div className="row">
						<div className="col-xs-1 control left" onClick={this.prev} id="left">
							<i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
						</div>
						<div className="slider-container col-xs-10">
					      	<Swipeable
					        onSwiping={this.swiping}
					        onSwipingLeft={this.swipingLeft}
					        onSwiped={this.swiped}
					        onSwipingRight={this.swipedRight} >
								<div className="items">
									<div className="slide-item">
										<div className="slide-img-container">
											<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIsnZBBXdhpf1_qCVu08sQh95unQ65UTabUs5QoLivkAcaj7PVFA" className="slide-image" alt="..." />
										</div>
										<div>
											<h5 className="text-center">Sourav Dash</h5>
											<p className="text-center">
												"Every one of your marketing claims should be supported by evidence" - @crestodina
											</p>
										</div>
									</div>
									<div className="slide-item">
										<div className="slide-img-container">
											<img src="http://netflixlife.com/files/2015/05/inglourious-basterds-.jpg" className="slide-image" alt="..." />
										</div>
										<div>
											<h5 className="text-center">Sourav Dash</h5>
											<p className="text-center">
												"Every one of your marketing claims should be supported by evidence" - @crestodina
											</p>
										</div>
									</div>
									<div className="slide-item">
										<div className="slide-img-container">
											<img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjyD_W97_8VCTAqkGE1NX56S8d5783fKhT_-Q9wpDXR7HVsOjODQ" className="slide-image" alt="..." />
										</div>
										<div>
											<h5 className="text-center">Sourav Dash</h5>
											<p className="text-center">
												"Every one of your marketing claims should be supported by evidence" - @crestodina
											</p>
										</div>
									</div>
									<div className="slide-item">
										<div className="slide-img-container">
											<img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTB83A4eeAEgcHIH0WBRcEcYoYWCRtbZ9rId1ZZHrLv6OoYoRIC4A" className="slide-image" alt="..." />
										</div>
										<div>
											<h5 className="text-center">Sourav Dash</h5>
											<p className="text-center">
												"Every one of your marketing claims should be supported by evidence" - @crestodina
											</p>
										</div>
									</div>			  	
									<div className="slide-item">
										<div className="slide-img-container">
											<img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS7_0toJHp2ECSTtR2LxUOK5r9MMnwJTIG0VcKquihFQmNT411UJw" className="slide-image" alt="..." />
										</div>
										<div>
											<h5 className="text-center">Sourav Dash</h5>
											<p className="text-center">
												"Every one of your marketing claims should be supported by evidence" - @crestodina
											</p>
										</div>
									</div>
									<div className="slide-item">
										<div className="slide-img-container">
											<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3mdPQMucEN9P6L7xDfxZo_ARDmNQWo4L95OwXEE_xf7mcfUVW" className="slide-image" alt="..." />
										</div>
										<div>
											<h5 className="text-center">Sourav Dash</h5>
											<p className="text-center">
												"Every one of your marketing claims should be supported by evidence" - @crestodina
											</p>
										</div>
									</div>
									<div className="slide-item">
										<div className="slide-img-container">
											<img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS-MSs0i-X3IwGu8gkgt-L5iUJe3XDY2lnBfS7hccIu_svK86e1" className="slide-image" alt="..." />
										</div>
										<div>
											<h5 className="text-center">Sourav Dash</h5>
											<p className="text-center">
												"Every one of your marketing claims should be supported by evidence" - @crestodina
											</p>
										</div>
									</div>
									<div className="slide-item">
										<div className="slide-img-container">
											<img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTQFSuckpbQWSw1JYryscwhYXt9L-PYN6sxl2Jds3MYe3HGwOgZ" className="slide-image" alt="..." />
										</div>
										<div>
											<h5 className="text-center">Sourav Dash</h5>
											<p className="text-center">
												"Every one of your marketing claims should be supported by evidence" - @crestodina
											</p>
										</div>
									</div>
									<div className="slide-item">
										<div className="slide-img-container">
											<img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTJAyk3csTXu1Oe7el5m2NnlKHxxXuq1GKCIJuBecpUMv75qnWpVg" className="slide-image" alt="..." />
										</div>
										<div>
											<h5 className="text-center">Sourav Dash</h5>
											<p className="text-center">
												"Every one of your marketing claims should be supported by evidence" - @crestodina
											</p>
										</div>
									</div>
									<div className="slide-item">
										<div className="slide-img-container">
											<img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT3qP9OlkP6TaWRtO-RAj7J3JjFM9a8iJBtEcPWnXLbjXlWZrpB" className="slide-image" alt="..." />
										</div>
										<div>
											<h5 className="text-center">Sourav Dash</h5>
											<p className="text-center">
												"Every one of your marketing claims should be supported by evidence" - @crestodina
											</p>
										</div>
									</div>
									<div className="slide-item">
										<div className="slide-img-container">
											<img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQlGi1Z9Muxvxz2WyRaAfKbmVYCn3nH0vvaw_LU5pyvfMxVAmNB" className="slide-image" alt="..." />
										</div>
										<div>
											<h5 className="text-center">Sourav Dash</h5>
											<p className="text-center">
												"Every one of your marketing claims should be supported by evidence" - @crestodina
											</p>
										</div>
									</div>
									<div className="slide-item">
										<div className="slide-img-container">
											<img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRglxVWeeh8xfNIRM6nN6cDoaRfpSx8158MWzb7n2e9vnJKq_P6" className="slide-image" alt="..." />
										</div>
										<div>
											<h5 className="text-center">Sourav Dash</h5>
											<p className="text-center">
												"Every one of your marketing claims should be supported by evidence" - @crestodina
											</p>
										</div>
									</div>
									<div className="slide-item">
										<div className="slide-img-container">
											<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx5ZGvxU1Kw3dgjV-Vxi_u4DtoUy-qtn1bcmbeNbjBPnqLvxzqug" className="slide-image" alt="..." />
										</div>
										<div>
											<h5 className="text-center">Sourav Dash</h5>
											<p className="text-center">
												"Every one of your marketing claims should be supported by evidence" - @crestodina
											</p>
										</div>
									</div>
								</div>
		 					</Swipeable>
						</div>
						<div className="col-xs-1 control right" onClick={this.next} id="right">
							<i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
						</div>
					</div>
				</div>
			</div>
		);
	};
}