import React, { Component } from 'react';
import './XmasHat.css';

class XmasHat extends Component {
  render() {
    return (
      <div>
        <div className="XH-container">
          <div className="XH-base"></div>
          <div className="XH-main"></div>
          <div className="XH-ball"></div>
        </div>
      </div>
    );
  }
}

export default XmasHat;
