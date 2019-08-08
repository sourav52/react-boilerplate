import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import NewsContainer from './components/newscontainer';
import SliderContainer from './components/slidercontainer';
import NewsLetter from './components/newsletter';
import Footer from './components/footer';

const App = () => {
	return (
		<div>
			<Header />
			<NewsContainer />
			<SliderContainer />
			<NewsLetter />
			<Footer />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('#wrapper'));