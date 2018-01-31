import React, { Component } from "react";
import "./GetInTouch.css";

class GetInTouch extends Component {
	render() {
		return (
			<div id="GetInTouch" className="GetInTouch">
				<h1 className="GetInTouch-title text-heading">Get In Touch</h1>
				<div className="contact-icon-container">
					<a
						href="https://www.facebook.com/scott.nicholson.9461"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i
							className="fa fa-5x fa-facebook-official contact-icon"
							aria-hidden="true"
						/>
					</a>
					<a
						href="https://twitter.com/Scott_N99"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i
							className="fa fa-5x fa-twitter contact-icon"
							aria-hidden="true"
						/>
					</a>
					<a
						href="https://www.instagram.com/scott_n99/?hl=en"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i
							className="fa fa-5x fa-instagram contact-icon"
							aria-hidden="true"
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/scott-nicholson/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i
							className="fa fa-5x fa-linkedin-square contact-icon"
							aria-hidden="true"
						/>
					</a>
					<a
						href="https://github.com/SNicholson99"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa fa-5x fa-github contact-icon" aria-hidden="true" />
					</a>
					<a
						href="https://schoolofcodebootcamp.slack.com/team/U6T1PS5DL"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa fa-5x fa-slack contact-icon" aria-hidden="true" />
					</a>
					<a
						href="https://medium.com/@scott.nicholson"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa fa-5x fa-medium contact-icon" aria-hidden="true" />
					</a>
				</div>
			</div>
		);
	}
}

export default GetInTouch;
