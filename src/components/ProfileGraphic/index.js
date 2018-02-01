import React, { Component } from "react";
import "./ProfileGraphic.css";

import graphic from "./outlineGraphic.svg";

class ProfileGraphic extends Component {
	render() {
		return (
			<div className="profile-graphic">
				<div className="graphic-container">
					<img className="graphic" alt="graphic" src={graphic} />
					<div className="buzzword-container">
						<h5 className="buzzword"
							style={{
							animationDuration: "6s",
							position: "absolute",
							top: "3vh",
							left: "20vw"
						}}
						>
							JavaScript
						</h5>
						<h5 className="buzzword"
							style={{
							animationDuration: "6.4s",
							position: "absolute",
							top: "3vh",
							left: "28vw"
						}}
						>
							Git
						</h5>
						<h5 className="buzzword"
							style={{
							animationDuration: "6.2s",
							position: "absolute",
							top: "10vh",
							left: "20.5vw"
						}}
						>
							React
						</h5>
						<h5 className="buzzword"
							style={{
							animationDuration: "6.6s",
							position: "absolute",
							top: "10vh",
							left: "25vw"
						}}
						>
							Node.JS
						</h5>
						<h5 className="buzzword"
							style={{
							animationDuration: "7s",
							position: "absolute",
							top: "16vh",
							left: "19vw"
						}}
						>
							HTML
						</h5>
						<h5 className="buzzword"
							style={{
							animationDuration: "6.8s",
							position: "absolute",
							top: "16vh",
							left: "28vw"
						}}
						>
							CSS
						</h5>
					</div>
				</div>
			</div>
		);
	}
}

export default ProfileGraphic;
