import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import logo from './logo.svg';

const btn1 = "HOME";
const btn2 = "MY STORY";
const btn3 = "PROJECTS";
const btn4 = "GET IN TOUCH";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="Navbar">
          {/* <img src={logo} alt="logo" className="logo" /> */}
          <Link to='/' className="Navbar-Link Link">{btn1}</Link>
          <Link to='/MyStory' className="Navbar-Link Link">{btn2}</Link>
          <Link to='/Projects' className="Navbar-Link Link">{btn3}</Link>
          <Link to='/GetInTouch' className="Navbar-Link Link">{btn4}</Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;
