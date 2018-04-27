import * as d3 from 'd3';
import * as jquery from 'jquery';
import drawPlayers from './players';
import {colorDictionary,fieldDictionary} from './dictionary';
import '../style/variables.scss';


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

  changeYearHeader(year);

  changeColorField('#path2807', year);
  changeColorField('#path2795', year);
  changeColorField('#path2793', year);
  changeColorField('#rect2765', year);
  changeColorField('#rect3044', year);
  changeColorField('#rect3050', year);
  changeColorField('#path3068', year);
  changeColorField('#path3074', year);
  makeGray(year)

  //drawField
  drawPlayers(subset);
  //Draw or update the 10 dots representing the enterPlayer, using the subset array
  //from the dictionary, you look up the {x,y} of each position
};

function changeColorField(element, year) {
  d3.select(element)
    .transition()
    .style('fill', () => {
      const fieldColor = fieldDictionary.get(year);
      return fieldColor;
    });
};

function makeGray(year) {
  if (year === 'starter') {
    $('.st1, .st3, .st4, .st8').css('fill', '#a48e28');
    $('.st1, .st2, .st4, .st8').css('stroke', '#85881b');
    $('#rect2812').css('stroke', '#ffffff');
    $('#rect2814').css('stroke', '#ffffff');
    $('#rect2820').css('stroke', '#ffffff');
  } else {
  $('.st1, .st3, .st4, .st8').css('fill', '#bfbfbf');
  $('.st1, .st2, .st4, .st8').css('stroke', '#ffffff');
  }
};

function changeYearHeader (year) {
  if (year ==='starter') {
    d3.select('#year').html('Scroll to Begin');
  } else {
    const headerColor = colorDictionary.get(year);
    d3.select('#year').html(year)
      .style('color', headerColor);
  }

};
