import React, {Component} from 'react';

import './Background.css';

class Background extends Component {
  render () {
    return (
      <div className="Background">
        <div className="sky">
        </div>
        <div className="sea">
          <div className="wave wave-1" />
        </div>
        <div className="sand">
        </div>
      </div>
    )
  }
}

export default Background;
