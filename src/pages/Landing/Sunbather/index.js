import React, {Component} from 'react';

import './Sunbather.css';

class Sunbather extends Component {
  render () {
    return (
      <div className="Sunbather-container">
        <div className="Sunbather-head">
          <div className="Sunbather-hair-base" />
        </div>
        <div className="Sunbather-neck" />
        <div className="Sunbather-body">
          <div className="Sunbather-shoulderblade Sunbather-shoulderblade-left" />
          <div className="Sunbather-shoulderblade Sunbather-shoulderblade-right" />
          <div className="Sunbather-shorts" />
        </div>
        <div className="Sunbather-arm Sunbather-arm-left" />
        <div className="Sunbather-arm Sunbather-arm-right" />
        <div className="Sunbather-hand Sunbather-hand-left" />
        <div className="Sunbather-hand Sunbather-hand-right" />
      </div>
    )
  }
}

export default Sunbather;
