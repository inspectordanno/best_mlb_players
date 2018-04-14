import {map, select} from 'd3';



export const dictionary = map()
  .set('Pitcher', select('#pitchersmound').node().getBoundingClientRect()) //pitcher
  .set('Catcher', '#homeplate') //home plate
  .set('First Base', '#firstbase') //first base
  .set('Second Base', '#secondbase') //second base
  .set('Third Base', '#thirdbase'); //third base
  // .set('Left Field') //left field
  // .set('Center Field')//center field
  // .set('Right Field'); //right field
