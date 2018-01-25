import React, {Component} from 'react';

import './Speaker.css';

class Speaker extends Component {
  render () {
    return (
      <div className="speaker-container">
        <div className="speaker-base speaker-base-left">
          <div className="speaker-top speaker-top-left" />
          <div className="speaker-bottom speaker-bottom-left" />
        </div>
        <div className="speaker-base speaker-base-right">
          <div className="speaker-top speaker-top-right" />
          <div className="speaker-bottom speaker-bottom-right" />
        </div>
        <div className="speaker-console">
          <div className="speaker-display" />
          <div className="speaker-light-container">
            <div className="speaker-light" />
            <div className="speaker-light" />
            <div className="speaker-light speaker-light-red" />
          </div>
        </div>
      </div>
    )

  }
}

export default Speaker;
