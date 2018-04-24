import {map, select} from 'd3';

const positionSelect = position => {
  const {top,bottom,left,right} = select(position).node().getBoundingClientRect();
  return {
    x:(left+right)/2,
    y:(top+bottom)/2
  };
};

const dictionary = map();

export {dictionary, positionSelect};
