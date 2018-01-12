import React, { Component } from 'react';
import './ProfileGraphic.css';

import graphic from "./outlineGraphic.svg";

class ProfileGraphic extends Component {
  render() {
    return (
      <div className="profile-graphic">
        <div className="graphic-container">
          <img className="graphic-image" alt="graphic image" src={graphic} />
        </div>
      </div>
    );
  }
}

export default ProfileGraphic;
