import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import image from '../assets/images/basicLineDrawing.png';

const Menu = () => {

	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<img src={image} />
				</div>
				<div className="col-lg-6">
					<h3 id="one">Projects</h3>
					<h3 id="two">About</h3>
				</div>
			</div>
		</div>
	);
}

export default Menu;
