console.log('index.js!');
import * as d3 from 'd3';
import * as jquery from 'jquery';
console.log($('body'));
// const waypoints = require('waypoints/lib/jquery.waypoints.js');
// console.log(waypoints);
import * as waypoints from 'waypoints/lib/jquery.waypoints.js';
import {parse} from './components/utils.js';
import './style/tachyons.min.scss';
import './style/appStyles.scss';



//every time i trigger a waypoint, i am filtering out all the players that match the decade and then do an update pattern


  d3.csv('./data/baseball.csv',parse).then(function(data) {
    console.log(data); // [{"Hello": "world"}, …
    $('.scroll_div').each(function(){
      // console.log($(this));
      let id = $(this).attr('id');
      // console.log(id);
      $(this).waypoint({
        handler: function(){
          render(id); //argument has to be the same as line 23 variable
        }
      });
    });

    function render(id) {
      let year = id.replace('div_','');
      var subset = data.filter(function(d){
            return d.Year == year;
          });
      console.log(subset);
    }

  });

  d3.xml("./diamond.svg").then(function(xml) {
  document.getElementById('svg_container').appendChild(xml.documentElement);
  var base = d3.select('#firstbase');
  base.style("fill", "red");
  console.log(base.node());
  console.log(base.node().clientX);
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
