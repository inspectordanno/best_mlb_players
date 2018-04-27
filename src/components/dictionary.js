import {map, select} from 'd3';

const positionSelect = position => {
  // const {top,bottom,left,right} = select(position).node().getBoundingClientRect();
  return {
    x: select(position).attr("x"),
    y: select(position).attr("y")
  };
};

const positionDictionary = map();

const colorDictionary = map();

const fieldDictionary = map();

export {positionDictionary, positionSelect, colorDictionary, fieldDictionary};
