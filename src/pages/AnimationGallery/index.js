import React, {Component} from 'react';

import './AnimationGallery.css';
import Toaster from './../../components/cssArt/Toaster';
import Speaker from './../../components/cssArt/Speaker';

class AnimationGallery extends Component {
  render () {
    return(
        <div id="AnimationGallery" className="AnimationGallery">
          <h2 className="AnimationGallery-title text-heading">Animation Gallery</h2>
          <div className="animation-container">
            <div><Toaster /></div>
            <div><Speaker /></div>
          </div>
        </div>
    )
  }
}

export default AnimationGallery;
