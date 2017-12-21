import React, { Component } from 'react';
import './App.css';
import Home from './../Home';
import Navbar from './../Navbar';
import background from './stars.jpeg';
// import Footer from './../Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={background} className="background" alt="background"/>
        <Home />
        <Navbar />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
