import {map, select} from 'd3';

const dictionary = map();
        dictionary.set('Pitcher', select('#pitcher').node().getBoundingClientRect()); //pitcher;

        console.log(dictionary)
        //export const dictionary;

  // .set('Left Field') //left field
  // .set('Center Field')//center field
  // .set('Right Field'); //right field
