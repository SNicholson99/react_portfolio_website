import React, { Component } from 'react';
import './RabbitEars.css';

class RabbitEars extends Component {
  render() {
    return (
      <div>
          <div className="RE-outer"></div>
          <div className="RE-outer RE-outerR"></div>
          <div className="RE-inner"></div>
          <div className="RE-inner RE-innerR"></div>
      </div>
    );
  }
}

export default RabbitEars;
