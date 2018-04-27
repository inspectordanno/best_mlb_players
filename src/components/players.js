import * as d3 from 'd3';
import {positionDictionary, colorDictionary} from './dictionary';

export default function(players){

  console.log(players);



  const playersNode = d3.select('#layer1')
    .selectAll('.player')
    .data(players, d => d.Name);

  console.log(positionDictionary);

  playersNode.enter().append('circle')
    .merge(playersNode)
    .attr('class','player')
    .attr('id', d => d.Name)
    .attr('cx', d => {
      const xy = positionDictionary.get(d.Position);
      if(!xy) return 0;
      console.log(xy);
      // console.log(d3.select("svg").node().getBBox().width / 650);
      // return xy.x * (d3.select("svg").node().getBBox().width / 650);
      return xy.x;
    })
    .attr('cy', d => {
      const xy = positionDictionary.get(d.Position);
      if(!xy) return 0;
      return xy.y;
    })
    // .style('fill', d => {
    //   const colorClass = colorDictionary.get(d.Year);
    //   console.log( `var(${colorClass})`);
    //   return `var(${colorClass})`;
    // })
    .attr('class', d => {
      const fillColor = colorDictionary.get(d.Year);
      return fillColor;
    })
    .attr('r', 8)
    .on("mouseover", d => {
      d3.select(".player_wrapper").html(d.Name);
      console.log("hi");
    });

  console.log(playersNode);
  console.log(playersNode.enter())
  console.log(playersNode.exit());
  playersNode.exit().remove();

};
