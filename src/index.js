console.log('index.js!');
import * as d3 from 'd3';
import * as jquery from 'jquery';
console.log($('body'));
// const waypoints = require('waypoints/lib/jquery.waypoints.js');
// console.log(waypoints);
import * as waypoints from 'waypoints/lib/jquery.waypoints.js';
import {parse} from './components/utils.js';
import {dictionary, positionSelect} from './components/dictionary.js';
import {scrollDiv} from './components/scroller.js';
// import tooltip from './components/tooltip.js'
import './style/tachyons.min.scss';
import './style/appStyles.scss';

console.log(dictionary);
// tooltip();

//every time i trigger a waypoint, i am filtering out all the players that match the decade and then do an update pattern


Promise.all([
  d3.csv('./data/baseball.csv',parse),
  d3.xml("./diamond_clean.svg")
]).then(function([data,xml]) {
  document.getElementById('svg_container').appendChild(xml.documentElement);

  // //<svg> populated, now get the location of the <svg> elements
  // dictionary.set('Pitcher', positionSelect('#pitcher'))
    // .set('Catcher', positionSelect('#catcher'))
    dictionary.set('First Base', positionSelect('#rect2801'))
    .set('Second Base', positionSelect('#rect2803'));
    // .set('Shortstop', positionSelect('#shortstop'))
    // .set('Third Base', positionSelect('#thirdbase'))
    // .set('Left Field', positionSelect('#leftfield'))
    // .set('Center Field', positionSelect('#centerfield'))
    // .set('Right Field', positionSelect('#rightfield'));

    console.log(dictionary.get('Pitcher'));
    scrollDiv(data);
});
