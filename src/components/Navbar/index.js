import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import logo from './logo.svg';

const btn1 = "HOME";
const btn2 = "ANIMATION GALLERY";
const btn3 = "MY STORY";
const btn4 = "PROJECTS";
const btn5 = "GET IN TOUCH";
// const btn1 = "Home";
// const btn2 = "My Story";
// const btn3 = "Projects";
// const btn4 = "Get In Touch";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="Navbar text-subheading">
          <Link to='/Home' className="Navbar-Link Link">{btn1}</Link>
          <Link to='/AnimationGallery' className="Navbar-Link Link">{btn2}</Link>
          <Link to='/MyStory' className="Navbar-Link Link">{btn3}</Link>
          <Link to='/Projects' className="Navbar-Link Link">{btn4}</Link>
          <Link to='/GetInTouch' className="Navbar-Link Link">{btn5}</Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;
