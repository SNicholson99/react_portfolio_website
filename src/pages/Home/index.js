import React, { Component } from "react";
import "./Home.css";
import profile from "./profile-outline-gray.png";

class Home extends Component {
	render() {
		return (
			<div id="Home" className="home-container">
				<div className="home-outline-graphic-container">
					<img src={profile} className="home-outline-graphic" />
				</div>
				<div className="home-text-container">
					<h1 className="home-title">
						Scott Andrew Nicholson
					</h1>
					<h4 className="home-job-role">
						Junior Web Developer
					</h4>
				</div>
			</div>
		);
	}
}

export default Home;

{/* <div className="home-navbar-container"></div> */}

{/* <a href="#AnimationGallery">
<div className="arrow-down-container">
<i
className="fa fa-angle-double-down fa-5x arrow-down clickable"
aria-hidden="true"
/>
</div>
</a> */}
