console.log('index.js!');
import * as d3 from 'd3';
import * as jquery from 'jquery';
console.log($('body'));
// const waypoints = require('waypoints/lib/jquery.waypoints.js');
// console.log(waypoints);
import * as waypoints from 'waypoints/lib/jquery.waypoints.js';
import {parse} from './components/utils.js';
import {positionDictionary, positionSelect, colorDictionary, fieldDictionary} from './components/dictionary.js';
import {scrollDiv} from './components/scroller.js';
// import tooltip from './components/tooltip.js'
import './style/tachyons.min.scss';
import './style/variables.scss'
import './style/appStyles.scss';

Promise.all([
  d3.csv('./data/baseball.csv',parse),
  d3.xml("./diamond_clean_updated.svg")
]).then(function([data,xml]) {
  document.getElementById('svg_container').appendChild(xml.documentElement);


    positionDictionary.set('First Base', positionSelect('#rect2801'))
      .set('Second Base', positionSelect('#rect2803'))
      .set('Shortstop', positionSelect('#shortstop'))
      .set('Third Base', positionSelect('#rect2799'))
      .set('Catcher', positionSelect('#home'))
      .set('Left Field', positionSelect('#left'))
      .set('Center Field', positionSelect('#center'))
      .set('Right Field', positionSelect('#right'))
      .set('Pitcher', positionSelect('#rect2805'));

    colorDictionary.set('1910s', '#00449e')
      .set('1920s', '#ff6300')
      .set('1930s', '#5e2ca5')
      .set('1940s', '#d5008f')
      .set('1950s', '#137752')
      .set('1960s', '#001b44')
      .set('1970s', '#e7040f')
      .set('1980s', 'black')
      .set('1990s', '#6A6C6E')
      .set('2000s', 'white');

    fieldDictionary.set('1910s', '#cce2ff')
      .set('1920s', '#ffe0cc')
      .set('1930s', '#e3d7f4')
      .set('1940s', '#ffccee')
      .set('1950s', '#d3f8ea')
      .set('1960s', '#cce0ff')
      .set('1970s', '#ffd3cc')
      .set('1980s', '#e6e6e6')
      .set('1990s', '#bfbfbf')
      .set('2000s', '#999999');




    console.log(positionDictionary.get('Pitcher'));
    scrollDiv(data);
});
