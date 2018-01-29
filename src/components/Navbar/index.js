import React, { Component } from 'react';
import './Navbar.css';
// import logo from './logo.svg';

// import Home from './../../pages/Home';
// import MyStory from './../../pages/MyStory';
// import Projects from './../../pages/Projects';
// import AnimationGallery from './../../pages/AnimationGallery';
// import GetInTouch from './../../pages/GetInTouch';

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
          <a href="#Home" className="Navbar-Link Link">{btn1}</a>
          <a href="#AnimationGallery" className="Navbar-Link Link">{btn2}</a>
          <a href="#MyStory" className="Navbar-Link Link">{btn3}</a>
          <a href="#Projects" className="Navbar-Link Link">{btn4}</a>
          <a href="#GetInTouch" className="Navbar-Link Link">{btn5}</a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
