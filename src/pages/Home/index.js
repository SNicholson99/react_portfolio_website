import React, { Component } from 'react';
import './Home.css';
import graphic from "./outlineGraphic.svg";
// import profile from "./profile.jpg";
import XmasHat from './../../components/XmasHat';
import RedNose from './../../components/RedNose';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        {/* <img className="profile" alt="Scott" src={profile} /> */}
        <XmasHat />
        <div className="graphic-container">
          <img className="graphic" alt="graphic" src={graphic} />
          <RedNose />
        </div>
        <div className="home-text">
          <h1 className="title">SCOTT ANDREW<br/>NICHOLSON</h1>
          <h4 className="sh">Full Stack Developer In Training</h4>
        </div>
      </div>
    );
  }
}

export default Home;
