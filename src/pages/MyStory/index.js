import React, { Component } from 'react';
import './MyStory.css';

class MyStory extends Component {
  render() {
    return (
      <div className="MyStory">
        <h1 className="MS-title">My Story</h1>
        <h2 className="MS-sh">Not Your Average Developer...</h2>
        <div className="MS-p1">
          At the age of 18, I completed sixth form with a passion for technology.
          Not wanting to go to university for another 3 years, I searched for an alternative route into
          the tech sector. Trudging from one apprenticeship application to another, I came to realise
          that they weren’t for me either.
        </div>
        <div className="MS-p2">
          Why is there a need to spend years chasing qualifications that don’t guarantee you a job anyway?
          Top employers are interested in the skills of the employee, not the list of qualifications you
          have in that sector. A certificate will only make you appear as impressive as the peer next to
          you holding the same paperwork. To make a real impression, I needed relevant experience.
        </div>
        <div className="MS-p3">
          After long deliberation and unfruitful research, I was beginning to lose hope of my career in
          technology. I was in the process of applying for engineering apprenticeships when a friend
          contacted me with information about a Bootcamp – a 16 week course which launches everyday people
          into the exciting tech world. Through the use of different teaching methods, the course strives
          to take individuals from the bare basics to full-stack developers.
        </div>
        <h2 className="">
          <span className="MS-kayaker">Kayaker.</span>
          <span className="MS-climber">Climber.</span>
          <span className="MS-coder">Coder.</span>
        </h2>
      </div>
    );
  }
}

export default MyStory;
