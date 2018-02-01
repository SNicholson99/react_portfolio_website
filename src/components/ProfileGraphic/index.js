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
							animationDuration: "5s",
							position: "absolute",
							top: "5vh",
							left: "20vw"
						}}
						>
							JavaScript
						</h5>
						<h5 className="buzzword"
							style={{
							animationDuration: "5.2s",
							position: "absolute",
							top: "16vh",
							left: "20vw"
						}}
						>
							React
						</h5>
						<h5 className="buzzword"
							style={{
							animationDuration: "5.5s",
							position: "absolute",
							top: "10vh",
							left: "28vw"
						}}
						>
							HTML
						</h5>
						<h5 className="buzzword"
							style={{
							animationDuration: "5.8s",
							position: "absolute",
							top: "12vh",
							left: "24vw"
						}}
						>
							CSS
						</h5>
						<h5 className="buzzword"
							style={{
							animationDuration: "6s",
							position: "absolute",
							top: "14vh",
							left: "26vw"
						}}
						>
							Git
						</h5>
					</div>
				</div>
			</div>
		);
	}
}

export default ProfileGraphic;
