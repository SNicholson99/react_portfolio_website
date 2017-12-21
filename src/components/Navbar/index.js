import React, { Component } from 'react';
import './Navbar.css';
// import logo from './logo.svg';

const btn1 = "HOME";
const btn2 = "ABOUT ME";
const btn3 = "PROJECTS";
const btn4 = "GET IN TOUCH";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        {/* <img src={logo} alt="logo" className="logo" /> */}
        <button className="Navbar-button btn1">{btn1}</button>
        <button className="Navbar-button btn2">{btn2}</button>
        <button className="Navbar-button btn3">{btn3}</button>
        <button className="Navbar-button btn4">{btn4}</button>
      </div>
    );
  }
}

export default Navbar;
