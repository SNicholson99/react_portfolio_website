import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './AnimationGallery.css';
import Toaster from './../../components/cssArt/Toaster';

class AnimationGallery extends Component {
  render () {
    return(
        <div className="AnimationGallery">
          <h2 className="AnimationGallery-title text-heading">Animation Gallery</h2>
          <Toaster />
        </div>
    )
  }
}

export default AnimationGallery;
