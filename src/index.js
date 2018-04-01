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
    console.log(data); // [{"Hello": "world"}, …]
  });


  //scale svg_container


  const svgBaseballField = document.getElementById('diamond');
  const svgLayer = document.getElementById('layer1');
  console.log(svgBaseballField);
  console.log(svgLayer);
  // const svgContainer = document.getElementsByClassName('svg_container')[0];
  // console.log(svgContainer);
  //
  // const svgContainerHeight = svgContainer.clientHeight;
  // console.log(svgContainerHeight);
  // const svgContainerWidth = svgContainer.clientWidth;
  // console.log(svgContainerWidth);

  svgBaseballField.setAttribute("width", '100%');
  svgBaseballField.setAttribute("height", '100%');

  svgBaseballField.setAttribute("viewBox", "0 0 200 200");
