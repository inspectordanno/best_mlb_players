import {map, select} from 'd3';

const positionSelect = position => {
  select(position).node().getBoundingClientRect();
};


const dictionary = map();
dictionary.set('Pitcher', positionSelect('#pitcher'))
  .set('Catcher', positionSelect('#catcher'))
  .set('First Base', positionSelect('#firstbase'))
  .set('Second Base', positionSelect('#secondbase'))
  .set('Shortstop', positionSelect('#shortstop'))
  .set('Third Base', positionSelect('#thirdbase'))
  .set('Left Field', positionSelect('#leftfield'))
  .set('Center Field', positionSelect('#centerfield'))
  .set('Right Field', positionSelect('#rightfield'));

export dictionary;
