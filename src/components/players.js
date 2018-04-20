import * as d3 from 'd3';
import {dictionary} from './dictionary';

export default function(players){

  console.log(players);

  const playersNode = d3.select('#baseballfield')
    .selectAll('.player')
    .data(players, d => d.Name);

  console.log(dictionary);

  playersNode.enter().append('circle')
    .attr('class','player')
    .attr('id', d => d.Name)
    .merge(playersNode)
    .transition()
    .attr('cx', d => {
      const xy = dictionary.get(d.Position);
      if(!xy) return 0;
      console.log(xy);
      return xy.x * 3.33;
    })
    .attr('cy', d => {
      const xy = dictionary.get(d.Position);
      if(!xy) return 0;
      return xy.y * 3.1;
    })
    .attr('r', 40);

  playersNode.exit().remove();

}
