import React, { Component } from 'react';

import './App.css';
import Home from './../../pages/Home';
import MyStory from './../../pages/MyStory';
import Projects from './../../pages/Projects';
import AnimationGallery from './../../pages/AnimationGallery';
import GetInTouch from './../../pages/GetInTouch';
import Navbar from './../Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          {/* <Navbar /> */}
          <Home />
          <AnimationGallery />
          <MyStory />
          {/* <Projects /> */}
          <GetInTouch />
        </div>
      </div>
    );
  }
}

export default App;
