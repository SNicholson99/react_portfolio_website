import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './../../pages/Home';
import MyStory from './../../pages/MyStory';
import Projects from './../../pages/Projects';
import AnimationGallery from './../../pages/AnimationGallery';
import GetInTouch from './../../pages/GetInTouch';
import Navbar from './../Navbar';
// import background from './stars.jpeg';
// import Footer from './../Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <img src={background} className="background" alt="background"/> */}
        <Navbar />
        <AnimationGallery />
        <Home />
        <MyStory />
        <Projects />
        <GetInTouch />
        {/* <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/MyStory' component={MyStory} />
          <Route path='/Projects' component={Projects} />
          <Route path='/GetInTouch' component={GetInTouch} />
        </Switch> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
