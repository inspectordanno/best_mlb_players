import {map, select} from 'd3';

export const dictionary = map()
  .set('Pitcher', select('#pitchersmound').node().getBoundingClientRect()); //pitcher

  console.log(dictionary);

  // .set('Left Field') //left field
  // .set('Center Field')//center field
  // .set('Right Field'); //right field
