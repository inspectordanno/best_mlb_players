import {csv} from 'd3';

export const parse = d => {
	return {
		Batting_Average: +d.BA,
		ERA: +d.ERA,
		Home_Runs: +d.HR,
		Hits: +d.Hits,
		K_Per_Nine: +d.K_9,
		Losses: +d.L,
		RBI: +d.RBI,
		Runs: +d.R,
		Stolen_Bases: +d.SB,
		Strike_Outs: +d.SO,
		Wins: +d.W,
		Wins_Above_Replacement: +d.WAR,
		WHIP: +d.WHIP
	};
};

// export const fetchCsv = (url, parse) => {
// 	return new Promise((resolve, reject) => {
// 		csv(url, parse, (err, data) => {
// 			if(err){
// 				reject(err);
// 			}else{
// 				resolve(data);
// 			}
// 		})
// 	});
// }
