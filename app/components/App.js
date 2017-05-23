import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Canvas from './Canvas/Canvas';
import image from '../assets/images/basicLineDrawing.png';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {

		};

	}

	componentDidMount() {
		let canvas = document.getElementById("canvas");
	}

	changeTitleEveryFewSeconds() {
		//this function will update the main title name every few seconds
		//madeleine-huish@2.0.0, madeleineHuish.js, madeleine_huish.py, MadeleineHuish.cpp etc...
	}

	render() {

		return (
			<div className="container">
				<div className="row">
					<div className="col-lg-offset-1 col-lg-10 col-lg-offset-1">
		      	<h1 className="text-center title">madeleine_huish.js</h1>
						<img src={image} />
						{/* <Canvas /> */}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
