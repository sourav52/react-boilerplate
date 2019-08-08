import React from 'react';

const HeroSection = () =>{
	return (
		<div className="container hero-container">
			<div className="row">
				<div className="col-lg-7">
					<div className="img-thumbnail hero-image">
						<img src="../../img/hero-preview.jpg" alt="..." className=""/>
					</div>
				</div>
				<div className="col-lg-5">
					<h4 className="intro">Hey, my name is Sourav kumar dash and I am a Software Developer with 2+ years experience in Software Development. </h4>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;