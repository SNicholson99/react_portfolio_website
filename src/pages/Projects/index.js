import React, { Component } from 'react';
import './Projects.css';

import GridList from './../../components/GridList';

class Projects extends Component {
  render() {
    return (
      <div id="Projects" className="Projects">
        <h1 className="Projects-title text-heading">Projects</h1>
        <br/><br/><br/>
        <GridList />
      </div>
    );
  }
}

export default Projects;
