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

    colorDictionary.set('1910s', 'fillred')
      .set('1920s', 'fillorange')
      .set('1930s', 'fillpurple')
      .set('1940s', 'fillpink')
      .set('1950s', 'fillgreen')
      .set('1960s', 'fillnavy')
      .set('1970s', 'fillblue')
      .set('1980s', 'fillblack')
      .set('1990s', 'fillgray')
      .set('2000s', 'fillwhite');

    fieldDictionary.set('1910s', '#ffd3cc')
      .set('1920s', '#ffe0cc')
      .set('1930s', '#e3d7f4')
      .set('1940s', '#ffccee')
      .set('1950s', '#d3f8ea')
      .set('1960s', '#cce0ff')
      .set('1970s', '#cce2ff')
      .set('1980s', '#e6e6e6')
      .set('1990s', '#bfbfbf')
      .set('2000s', '#999999');




    console.log(positionDictionary.get('Pitcher'));
    scrollDiv(data);
});
