import * as d3 from 'd3';
import {dictionary} from './dictionary';

export default function(players){

  console.log(players);

  const playersNode = d3.select('#layer1')
    .selectAll('.player')
    .data(players, d => d.Name);

  console.log(dictionary);

  playersNode.enter().append('circle')
    .attr('class','player')
    .attr('id', d => d.Name)
    .merge(playersNode)
    .attr('cx', d => {
      const xy = dictionary.get(d.Position);
      if(!xy) return 0;
      console.log(xy);
      // console.log(d3.select("svg").node().getBBox().width / 650);
      // return xy.x * (d3.select("svg").node().getBBox().width / 650);
      return xy.x;
    })
    .attr('cy', d => {
      const xy = dictionary.get(d.Position);
      if(!xy) return 0;
      return xy.y;
    })
    .attr('fill', d =>{
      console.log(d.Year);
      if (d.Year === "2000s") {
        return 'red';
      } else {
        return 'gray';
      }
    })
    .attr('r', 8)
    .on("mouseover", d => {
      d3.select(".player_wrapper").html(d.Name);
      console.log("hi");
    });

  playersNode.exit().remove();

};
