import React, { Component } from 'react';
import './App.css';
import Header from './../Header';
import Navbar from './../Navbar';
// import Footer from './../Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
