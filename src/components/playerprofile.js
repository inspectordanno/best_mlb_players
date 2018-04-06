//create html elements in player information scroller
const nestedData = d3.nest()
  .key(d => d.Position_type)
  .entries(data);

data.forEach(d => {
  let html = `<div class="player_title">${d.Name}</div>` //name of player
    html+= `<div class="player_WAR">${d.WAR}</div>` //WAR
    html+= `<div class="player_teams">${d.Teams}</div>` //teams
    html+= `<div class="player_picture">"picture goes here"</div>` //picture
    html+= `<div class="player_bio">"bio goes here"</div>` //bio
      html+= `<div class="stats">` //stats container
        html+= `<div class="player_BA">${d.BA}</div>` //batting average
        html+= `<div class="player_HR">${d.HR}</div>` //home runs
        html+= `<div class="player_RBI">${d.RBI}</div>` //RBI
        html+= `<div class="player_R">${d.R}</div>` //runs
        html+= `<div class="player_H">${d.H}</div>` //hits
        html+= `<div class="player_SB">${d.SB}</div>` //stolen bases
      html+=`</div>` //closes stats container



})
