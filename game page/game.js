const scoresEl = document.getElementById("scores");
const matchEl = document.getElementById("match");
const lineupsEl = document.getElementById("lineups");
const highlightsEl = document.getElementById("highlights")

var now = dayjs().format("dddd, MMMM D, YYYY h:mm A")
  $("#currentDay").text(now)
console.log(now)


// Lineups







// Scoreboard
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'ec19531030msh549c1ba3d1e32c2p1c9159jsnab8641a11590',
// 		'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
// 	}
// };
var score


// fetch('https://livescore6.p.rapidapi.com/matches/v2/get-scoreboard?Eid=702093&Category=soccer', options)
// 	.then(response => response.json())
// 	.then(response => {
//         score =response.T1
//         console.log(score)
//         for(var i = 0; i < score.length; i++){
//             scoresEl.textContent = score[0].abr;
//         }
//     })
// 	.catch(err => console.error(err));


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ec19531030msh549c1ba3d1e32c2p1c9159jsnab8641a11590',
            'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
        }
    };
    
    fetch('https://livescore6.p.rapidapi.com/news/v2/list', options)
        .then(response => response.json())
        .then(response => {
            score =response.topStories
            console.log(score)
            for(var i = 0; i < score.length; i++){
                scoresEl.textContent = score[0].title;
            }
        })

        .catch(err => console.error(err));