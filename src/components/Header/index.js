import React, { Component } from 'react';
import './Header.css';
import profile from "./profile.jpg";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img className="profile" alt="Scott" src={profile} />
        <div className="header-text">
          <h1 className="title">Scott Andrew<br/>Nicholson</h1>
          <h4 className="sh1 sh">Full Stack Developer In Training</h4>
        </div>
      </div>
    );
  }
}

export default Header;
