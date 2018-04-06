console.log('index.js!');
import * as d3 from 'd3';
import * as jquery from 'jquery';
import './style/appStyles.scss';
import {parse} from './components/utils'

// Import data using the Promise interface
// Promise.all([
//   fetchCsv('./data/baseball.csv')])
//   .then(([baseball]) => {
//     console.log(baseball);
//   });

  d3.csv('./data/baseball.csv',parse).then(function(data) {
    console.log(data); // [{"Hello": "world"}, …
  });

  d3.xml("./diamond.svg").then(function(xml) {
  document.getElementById('svg_container').appendChild(xml.documentElement);
  var base = d3.select('#firstbase');
  base.style("fill", "red")
});

//instantiate 9 circles

//



  //scale svg_container


  // const svgBaseballField = document.getElementById('diamond');
  // const svgLayer = document.getElementById('layer1');
  // console.log(svgBaseballField);
  // console.log(svgLayer);
  //
  //
  // svgBaseballField.setAttribute("width", '100%');
  // svgBaseballField.setAttribute("height", '100%');
  //
  // svgBaseballField.setAttribute("viewBox", "0 0 650 500");
  // svgBaseballField.setAttribute("preserveAspectRatio", "none");
