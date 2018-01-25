import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: "80vw",
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'white',
    textAlign: 'center',
  },
};

const tilesData = [
  {
    img: '/projectImgs/socWebsite.png',
    href: 'https://github.com/SchoolOfCode/final-project-soc-website',
    alt: 'School of Code Website',
    title: 'School Of Code Website',
  },
  {
    img: '/projectImgs/dellCRM.png',
    href: 'https://github.com/SchoolOfCode/dell-project-week-katastrophic',
    alt: 'Dell EMC CRM',
    title: 'Dell EMC CRM',
  },
  {
    img: '/projectImgs/mountainApp.png',
    href: 'https://github.com/SNicholson99/mountainWebsite',
    alt: 'Mountain App',
    title: 'Mountain App',
  },
  {
    img: '/projectImgs/teamWebsite.png',
    href: 'https://github.com/SchoolOfCode/team-porfolio-the-ark',
    alt: 'Team Portfolio Website',
    title: 'Team Portfolio Website',
  },
  {
    img: '/projectImgs/socketTimer.png',
    href: 'https://github.com/SNicholson99/react_SocketTimer',
    alt: 'Socket Timer',
    title: 'Socket Timer',
  },
  {
    img: '/projectImgs/trafficLight.png',
    href: 'https://github.com/SchoolOfCode/traffic-lights-task-SNicholson99',
    alt: 'CSS Traffic Light',
    title: 'CSS Traffic Light',
  },
];

const GridListExampleSingleLine = () => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2}>
      {tilesData.map((tile) => (
        <a target="_blank" href={tile.href}>
          <GridTile
            key={tile.img}
            title={tile.title}
            titleStyle={styles.titleStyle}
            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          >
            <img src={tile.img} alt={tile.alt} />
          </GridTile>
        </a>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSingleLine;
