import React, { Component } from 'react';
import './MyStory.css';

class MyStory extends Component {
  render() {
    return (
      <div id="MyStory" className="MyStory">
        <h1 className="MyStory-title text-heading">My Story</h1>
        <h2 className="MyStory-subheading1 text-subheading">Not Your Average Developer...</h2>
        <div className="MyStory-body text-body">
          At the age of 18, I completed sixth form with a strong passion for technology. Not interested
          in going to university for another 3 years, I searched for an alternative route into the tech
          industry. Upon trudging from one apprenticeship application to another, I came to realise that
          they weren’t for me either.
        </div>
        <div className="MyStory-body text-body">
          Why is there a need to spend years chasing qualifications that don’t guarantee you a job? Top
          employers are interested in the skills of the employee, not the list of qualifications you
          have in that sector. A certificate will only make you appear as impressive as the peer next to
          you holding the same paperwork. To make a real impression, I needed relevant experience.
        </div>
        <div className="MyStory-body text-body">
          After long deliberation and unfruitful research, I was beginning to lose hope of my career in
          technology. I was in the process of applying for engineering apprenticeships when a friend
          contacted me with information about a <a href="http://bootcamp.schoolofcode.co.uk/" target="_blank" rel="noopener noreferrer">Bootcamp</a> – a 16 week course which launches everyday people
          into the exciting tech world. Through the use of different teaching methods, the course strives
          to take individuals from the bare basics to full-stack developers.
        </div>
        <h2 className="MyStory-subheading2 text-subheading">
          <span className="MyStory-kayaker">Kayaker.</span>
          <span className="MyStory-climber">Climber.</span>
          <span className="MyStory-coder">Coder.</span>
        </h2>
      </div>
    );
  }
}

export default MyStory;
