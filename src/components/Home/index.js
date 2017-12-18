import React, { Component } from 'react';
import './Home.css';
import profile from "./profile.jpg";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <img className="profile" alt="Scott" src={profile} />
        <div className="header-text">
          <h1 className="title">Scott Andrew<br/>Nicholson</h1>
          <h4 className="sh1 sh">Full Stack Developer In Training</h4>
        </div>
      </div>
    );
  }
}

export default Home;
