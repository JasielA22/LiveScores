const scoresEl = document.getElementById("scores");
const matchEl = document.getElementById("match");
const lineupsEl = document.getElementById("lineups");
const highlightsEl = document.getElementById("highlights")

var now = dayjs().format("dddd, MMMM D, YYYY h:mm A")
  $("#currentDay").text(now)
console.log(now)


// Lineups
const lineups = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ec19531030msh549c1ba3d1e32c2p1c9159jsnab8641a11590',
		'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
	}
};

fetch('https://livescore6.p.rapidapi.com/matches/v2/get-lineups?Eid=702093&Category=soccer', lineups)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    console.log(lineups);





    
// Scoreboard
const scoreboard = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ec19531030msh549c1ba3d1e32c2p1c9159jsnab8641a11590',
		'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
	}
};

fetch('https://livescore6.p.rapidapi.com/matches/v2/get-scoreboard?Eid=702093&Category=soccer', scoreboard)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
