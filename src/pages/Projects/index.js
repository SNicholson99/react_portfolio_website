import React, { Component } from 'react';
import './Projects.css';

import GridList from './../../components/GridList';

class Projects extends Component {
  render() {
    return (
      <div id="Projects" className="Projects">
        <h1 className="Projects-title text-heading">Projects</h1>
        <br/><br/><br/>
        <div className="GridList"><GridList /></div>
      </div>
    );
  }
}

export default Projects;
