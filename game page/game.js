const homeTEl = document.getElementById("team1");
const visitTEl = document.getElementById("team2");
const lineupsEl = document.getElementById("lineups");
const highlightsEl = document.getElementById("highlights")
var subsArray = []
var now = dayjs().format("dddd, MMMM D, YYYY h:mm A")
  $("#currentDay").text(now)
console.log(now)

// Match Info 
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ec19531030msh549c1ba3d1e32c2p1c9159jsnab8641a11590',
		'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
	}
};

var teamsData;
var teamInfo1;
var teamInfo2;


fetch('https://livescore6.p.rapidapi.com/matches/v2/list-by-date?Category=soccer&Date=20221210&Timezone=-7', options)
	.then(response => response.json())
	.then(response => {
   teamsData = response.Stages[0]
    teamInfo1 = teamsData.Events[0].T1[0]
    teamInfo2 = teamsData.Events[0].T2[0]
    console.log(teamInfo1)
    console.log(teamInfo2)
    console.log(response)

    homeTEl.textContent = teamInfo1;
    visitTEl.textContent = teamInfo2;
    for (var i = 0; i < teamsData.length; i++){
      // homeTEl.textContent = teamInfo1;
      // visitTEl.textContent = teamInfo2;
    }

  })
	.catch(err => console.error(err));
  
 