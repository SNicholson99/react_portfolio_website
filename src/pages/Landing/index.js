import React, {Component} from 'react';

import './Landing.css';

import Background from './Background';
import Sun from './Sun';
import Sunbather from './Sunbather';

class Landing extends Component {
  render () {
    return(
    <div className="Landing">
      <Background />
      <Sun />
      <Sunbather />
    </div>
    )
  }
}

export default Landing;
