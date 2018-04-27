import {select, selectAll, style, html} from 'd3';
import {colorDictionary} from './dictionary.js'

//d3.select("#title_name").html(d.Name)

export default function() {
  selectAll('.player').on("mouseover", d => {
    select('#title_name').html(d.Name); //name
    select('#title_name') //name color
      .style('color', colorDictionary.get(d.Year));
    select('#war').html(`Wins Above Replacement: ${d.WAR}`); //war
    select('#photo').attr('src', d.Picture);
    select('#bio').html(d.Bio);
    console.log(d.Position_type);


    function deleteContent(array) {
      array.forEach(element => {
        select(element).html('');
      });
    };
    const offenseHTML = ['#runs', '#hits', '#homeruns', '#rbi', '#stolenbases', '#ba'];
    const pitcherHTML = ['#w', '#l', '#era', '#so', '#k9', '#whip'];

    if (d.Position_type === 'Offense') {
      select('#runs').html(`Runs: ${d.R}`);
      select('#hits').html(`Hits: ${d.H}`);
      select('#homeruns').html(`Home Runs: ${d.HR}`);
      select('#rbi').html(`RBI: ${d.RBI}`);
      select('#stolenbases').html(`Stolen Bases: ${d.SB}`);
      select('#ba').html(`Batting Average: ${d.BA}`);

      deleteContent(pitcherHTML);


    } else if (d.Position_type === 'Pitcher') {
      select('#w').html(`Wins: ${d.W}`);
      select('#l').html(`Losses: ${d.L}`);
      select('#era').html(`ERA: ${d.ERA}`);
      select('#so').html(`Strike Outs: ${d.SO}`);
      select('#k9').html(`K Per 9: ${d.K_9}`);
      select('#whip').html(`WHIP: ${d.WHIP}`);

      deleteContent(offenseHTML);

    }
  });
};
