import {csv} from 'd3';

export const parse = d => {
	return {
		Year: d.Year,
		Position: d.Position,
		Name: d.Name,
		Teams: d.Teams,
		BA: +d.BA,
		ERA: +d.ERA,
		HR: +d.HR,
		H: +d.Hits,
		K_9: +d.K_9,
		L: +d.L,
		RBI: +d.RBI,
		R: +d.Runs,
		SB: +d.SB,
		SO: +d.SO,
		W: +d.W,
		WAR: +d.WAR,
		WHIP: +d.WHIP
	};
};

function boundingRectToXY(boundingRect){
  return {

  }
}
