import React, { Component } from "react";
import "./Home.css";
// import profile from "./profile.jpg";
// import XmasHat from './../../components/XmasHat';
// import RedNose from './../../components/RedNose';
// import RabbitEars from './../../components/RabbitEars';
// import RabbitNose from './../../components/RabbitNose';
import ProfileGraphic from "./../../components/ProfileGraphic";

class Home extends Component {
	render() {
		return (
			<div id="Home" className="Home">
				<ProfileGraphic />
				<div className="home-text">
					<h1 className="title text-heading">
						Scott Andrew<br />Nicholson
					</h1>
					<h4 className="sh text-subheading">
						Full Stack Developer In Training
					</h4>
				</div>
				<i
					className="fa fa-angle-double-down fa-5x arrow-down"
					aria-hidden="true"
				/>
			</div>
		);
	}
}

export default Home;
