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
          <a
            href="#Home"
            className="Nav-btn1 Navbar-Link Link"
            >
            {btn1}
          </a>
          <a
            href="#AnimationGallery"
            className="Nav-btn2 Navbar-Link Link"
            >
            {btn2}
          </a>
          <a
            href="#MyStory"
            className="Nav-btn3 Navbar-Link Link"
            >
            {btn3}
          </a>
          <a
            href="#Projects"
            className="Nav-btn4 Navbar-Link Link"
            >
            {btn4}
          </a>
          <a
            href="#GetInTouch"
            className="Nav-btn5 Navbar-Link Link"
            >
            {btn5}
          </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
