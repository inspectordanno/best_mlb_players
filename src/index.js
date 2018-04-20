console.log('index.js!');
import * as d3 from 'd3';
import * as jquery from 'jquery';
console.log($('body'));
// const waypoints = require('waypoints/lib/jquery.waypoints.js');
// console.log(waypoints);
import * as waypoints from 'waypoints/lib/jquery.waypoints.js';
import {parse} from './components/utils.js';
import {dictionary} from './components/dictionary.js';
import {scrollDiv} from './components/scroller.js';
import './style/tachyons.min.scss';
import './style/appStyles.scss';

console.log(dictionary);

//every time i trigger a waypoint, i am filtering out all the players that match the decade and then do an update pattern


Promise.all([d3.csv('./data/baseball.csv',parse), d3.xml("./diamond.svg") ]).then(function(data,xml) {
  console.log(data,xml);
  document.getElementById('svg_container').appendChild(xml.documentElement);
  dictionary();
  scrollDiv();
});

  // d3.csv('./data/baseball.csv',parse).then(function(data) {
  //   console.log(data); // [{"Hello": "world"}, …
  //   $('.scroll_div').each(function(){
  //     // console.log($(this));
  //     let id = $(this).attr('id');
  //     // console.log(id);
  //     $(this).waypoint({
  //       handler: function(){
  //         render(id); //argument has to be the same as line 23 variable
  //       }
  //     });
  //   });
  //
  //   function render(id) {
  //     let year = id.replace('div_','');
  //     let subset = data.filter(function(d){
  //           return d.Year == year;
  //         });
  //     console.log(subset);

  //     //update
  //     let updatePlayers = d3.select('svg')
  //     .selectAll("circle")
  //     .data(subset);
  //
  //     //enter
  //     let enterPlayers = updatePlayers.enter()
  //       .append("circle")
  //       .merge(updatePlayers)
  //       .attr("cx", d => {
  //         let position = dictionary.get(d.Position);
  //         console.log(position);
  //       })
  //   }
  //
  // });
//
//   d3.xml("./diamond.svg").then(function(xml) {
//   document.getElementById('svg_container').appendChild(xml.documentElement);
//   const dictionary = d3.map();
//   dictionary.set('Pitcher', d3.select('#pitcher').node().getBoundingClientRect()); //pitcher;
//   console.log(dictionary);
//
//   //baseRect.top, baseRect.left
// });
//
// //instantiate 9 circles
//
//
//
