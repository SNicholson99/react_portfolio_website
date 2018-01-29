import React, { Component } from 'react';
import './GetInTouch.css';

class GetInTouch extends Component {
  render() {
    return (
      <div id="GetInTouch" className="GetInTouch">
        <h1 className="GetInTouch-title text-heading">Get In Touch</h1>
        <table>
          <tbody>
            <tr className="icon-row">
              <td className="contact-icon">
                <a href="https://www.facebook.com/scott.nicholson.9461" target="_blank" rel="noopener noreferrer"><i className="fa fa-5x fa-facebook-official" aria-hidden="true" ></i></a>
              </td>
              <td className="contact-icon">
                <a href="https://twitter.com/Scott_N99" target="_blank" rel="noopener noreferrer"><i className="fa fa-5x fa-twitter" aria-hidden="true" ></i></a>
              </td>
              <td className="contact-icon">
                <a href="https://www.instagram.com/scott_n99/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fa fa-5x fa-instagram" aria-hidden="true" ></i></a>
              </td>
              <td className="contact-icon">
                <a href="https://www.linkedin.com/in/scott-nicholson/" target="_blank" rel="noopener noreferrer"><i className="fa fa-5x fa-linkedin-square" aria-hidden="true" ></i></a>
              </td>
              <td className="contact-icon">
                <a href="https://github.com/SNicholson99" target="_blank" rel="noopener noreferrer"><i className="fa fa-5x fa-github" aria-hidden="true" ></i></a>
              </td>
              <td className="contact-icon">
                <a href="https://schoolofcodebootcamp.slack.com/team/U6T1PS5DL" target="_blank" rel="noopener noreferrer"><i className="fa fa-5x fa-slack" aria-hidden="true" ></i></a>
              </td>
              <td className="contact-icon">
                <a href="https://medium.com/@scott.nicholson" target="_blank" rel="noopener noreferrer"><i className="fa fa-5x fa-medium" aria-hidden="true" ></i></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default GetInTouch;
