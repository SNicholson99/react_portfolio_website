import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 900,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: './projectImgs/dellCRM.png',
    alt: 'Dell EMC CRM',
    title: 'Dell EMC CRM',
    featured: true,
  },
  {
    img: './projectImgs/socWebsite.png',
    alt: 'School of Code Website',
    title: 'School Of Code Website',
  },
  {
    img: './projectImgs/mountainApp.png',
    alt: 'Mountain App',
    title: 'Mountain App',
  },
  {
    img: './projectImgs/teamWebsite.png',
    alt: 'Team Portfolio Website',
    title: 'Team Portfolio Website',
    featured: true,
  },
  {
    img: './projectImgs/socketTimer.png',
    alt: 'Socket Timer',
    title: 'Socket Timer',
  },
  {
    img: './projectImgs/trafficLight.png',
    alt: 'CSS Traffic Light',
    title: 'CSS Traffic Light',
  },
];

/**
s * This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile.
 * The tiles have a customised title, positioned at the top and with a custom gradient `titleBackground`.
 */
const GridListExampleComplex = () => (
  <div style={styles.root}>
    <GridList
      cols={2}
      cellHeight={200}
      padding={1}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          actionPosition="left"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={tile.featured ? 2 : 1}
          rows={tile.featured ? 2 : 1}
        >
          <img alt={tile.alt} src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleComplex;
