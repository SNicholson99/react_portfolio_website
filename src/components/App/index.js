import React, { Component } from 'react';

import './App.css';
import Landing from './../../pages/Landing';
import Home from './../../pages/Home';
import MyStory from './../../pages/MyStory';
import Projects from './../../pages/Projects';
import AnimationGallery from './../../pages/AnimationGallery';
import GetInTouch from './../../pages/GetInTouch';
import Navbar from './../Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
        <Landing />
        <Home />
        <AnimationGallery />
        <MyStory />
        <Projects />
        <GetInTouch />
      </div>
    );
  }
}

export default App;
