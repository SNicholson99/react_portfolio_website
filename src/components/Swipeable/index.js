import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from './../Pagination';

import './Swipeable.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const slideData = {
  slide1: {
    img: '/projectImgs/socWebsite.png',
    alt: 'School of Code Website',
    class: 'swipeable-image',
    url: 'https://github.com/SchoolOfCode/final-project-soc-website',
  },
  slide2: {
    img: '/projectImgs/dellCRM.png',
    alt: 'Dell CRM',
    class: 'swipeable-image',
    url: 'https://github.com/SchoolOfCode/dell-project-week-katastrophic',
  },
  slide3: {
    img: '/projectImgs/mountainApp.png',
    alt: 'Mountain App',
    class: 'swipeable-image',
    url: 'https://github.com/SNicholson99/mountainWebsite',
  },
  slide4: {
    img: '/projectImgs/teamWebsite.png',
    alt: 'Team Portfolio Website',
    class: 'swipeable-image',
    url: 'https://github.com/SchoolOfCode/team-porfolio-the-ark',
  },
  slide5: {
    img: '/projectImgs/socketTimer.png',
    alt: 'Socket Timer',
    class: 'swipeable-image',
    url: 'https://github.com/SNicholson99/react_SocketTimer',
  },
  slide6: {
    img: '/projectImgs/trafficLight.png',
    alt: 'Traffic Light',
    class: 'swipeable-image',
    url: 'https://github.com/SchoolOfCode/traffic-lights-task-SNicholson99',
  },
};

const styles = {
  root: {
    position: 'relative',
  },
  slide: {
    padding: 15,
    minHeight: 400,
    maxHeight: 500,
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
  },
  slide1: {
    // backgroundColor: '#FEA900',
  },
  slide2: {
    // backgroundColor: '#B3DC4A',
  },
  slide3: {
    // backgroundColor: '#6AC0FF',
  },
  slide4: {
    // backgroundColor: '#ff6abf',
  },
  slide5: {
    // backgroundColor: '#6a6fff',
  },
  slide6: {
    // backgroundColor: '#fff66a',
  },
};

class MyComponent extends Component {
  state = {
    index: 0,
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };
render() {
    const { index } = this.state;
    return (
      <div >
        <div className="swipeable-container" style={styles.root}>
          <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
            <div style={Object.assign({}, styles.slide, styles.slide1)}>
              <a href={slideData.slide1.url} target='_blank'>
                <img src={slideData.slide1.img} alt={slideData.slide1.alt} className={slideData.slide1.class}/>
              </a>
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide2)}>
              <a href={slideData.slide2.url} target='_blank'>
                <img src={slideData.slide2.img} alt={slideData.slide2.alt} className={slideData.slide2.class}/>
              </a>
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide3)}>
              <a href={slideData.slide3.url} target='_blank'>
                <img src={slideData.slide3.img} alt={slideData.slide3.alt} className={slideData.slide3.class}/>
              </a>
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide4)}>
              <a href={slideData.slide4.url} target='_blank'>
                <img src={slideData.slide4.img} alt={slideData.slide4.alt} className={slideData.slide4.class}/>
              </a>
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide5)}>
              <a href={slideData.slide5.url} target='_blank'>
                <img src={slideData.slide5.img} alt={slideData.slide5.alt} className={slideData.slide5.class}/>
              </a>
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide6)}>
              <a href={slideData.slide6.url} target='_blank'>
                <img src={slideData.slide6.img} alt={slideData.slide6.alt} className={slideData.slide6.class}/>
              </a>
            </div>
          </AutoPlaySwipeableViews>
          <div style={{display:'flex', justifyContent:'center'}}>
            <Pagination dots={6} index={index} onChangeIndex={this.handleChangeIndex} />
          </div>
        </div>
      </div>
    );
  }
}
export default MyComponent;
