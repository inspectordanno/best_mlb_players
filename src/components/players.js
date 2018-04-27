import * as d3 from 'd3';
import {positionDictionary, colorDictionary, fieldDictionary} from './dictionary';
import hoverNode from './tooltip.js';

export default function(players){

  console.log(players);



  const playersNode = d3.select('#layer1')
    .selectAll('.player')
    .data(players, d => {
      return d.Name;
    });

    playersNode.transition()
    // .delay(100)
    .attr('stroke', 'teal');

  console.log(playersNode);

  console.log(positionDictionary);

  playersNode.enter().append('circle')
    .merge(playersNode)
    .attr('class', 'player')
    .style('fill', d => {
      const fillColor = colorDictionary.get(d.Year);
      return fillColor;
    })
    .attr('id', d => d.Name)
    .attr("cx",0)
    .attr("cy",0)
    .transition()
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
    .attr('r', 8);

    hoverNode();

    // d3.selectAll('.player').on("mouseover", d => {
    //   console.log(d3.select("span#insert"))
    //   d3.select("#insert").html(d.R);
    //   d3.select('#title_name')
    //     .style('color', fieldDictionary.get(d.Year));
    //   console.log(d.R);
    // });

    playersNode.exit()
      .transition()
      .attr("cx",0)
      .attr("cy",0)
      .remove();

  console.log(playersNode);
  console.log(playersNode.enter())
  console.log(playersNode.exit());


};
