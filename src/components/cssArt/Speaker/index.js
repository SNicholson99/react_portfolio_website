import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Speaker.css';

class Speaker extends Component {
  render () {
    return (
      <div className="speaker-container">
        <div className="speaker-base">
          <div className="speaker-top" />
          <div className="speaker-bottom" />
        </div>
      </div>
    )

  }
}

export default Speaker;
