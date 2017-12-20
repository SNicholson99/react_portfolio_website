import React, { Component } from 'react';
import './Navbar.css';

const btn1 = "Home";
const btn2 = "About Me";
const btn3 = "Previous Projects";
const btn4 = "Get In Touch";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <button className="Navbar-button btn1">{btn1}</button>
        <button className="Navbar-button btn2">{btn2}</button>
        <button className="Navbar-button btn3">{btn3}</button>
        <button className="Navbar-button btn4">{btn4}</button>
      </div>
    );
  }
}

export default Navbar;
