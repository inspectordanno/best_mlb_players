import * as d3 from 'd3';
import drawPlayers from './players';

export const scrollDiv = (data) => {

  $('.scroll_div').each(function(){
    // console.log($(this));
    let id = $(this).attr('id');
    $(this).waypoint({
      handler: () => {
        console.log(id);
        render(id,data);
      }
    });
  });
};

const render = (id,data) => {
  let year = id.replace('div_','');
  let subset = data.filter(d => {
        return d.Year == year;
      });
  console.log(subset);

  //drawField
  drawPlayers(subset);
  //Draw or update the 10 dots representing the enterPlayer, using the subset array
  //from the dictionary, you look up the {x,y} of each position


};
