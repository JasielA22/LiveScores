const homeTEl = document.getElementById("team1");
const h1ImgEl = document.getElementById("img1");
const visitTEl = document.getElementById("team2");
const lineupsEl = document.getElementById("lineups");
const highlightsEl = document.getElementById("highlights")
var subsArray = []
var now = dayjs().format("dddd, MMMM D, YYYY h:mm A")
  $("#currentDay").text(now)
console.log(now)


  

function getData(){
    fetch('https://livescore6.p.rapidapi.com/matches/v2/list-by-date?Category=soccer&Date=20221210&Timezone=-7',{
        method: 'GET',
        headers: { 'X-RapidAPI-Key': 'ec19531030msh549c1ba3d1e32c2p1c9159jsnab8641a11590',
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'}
    })
    .then(response => response.json().then(data => {
        var teamsData =data["Stages"][0]["Events"][1];

        var teamInfo1 = teamsData["T1"][0]["Nm"];
        var team1img = teamsData["T1"][0]["Img"];
        var teamInfo2 = teamsData["T2"][0]["Nm"];
        console.log(response)
        console.log(teamsData);
        console.log(team1img);
        console.log(teamInfo1);
        console.log(teamInfo2);

        homeTEl.textContent = teamInfo1;
        // h1ImgEl.textContent = team1img;
        visitTEl.textContent = teamInfo2;


        for(var i = 0; i < teamsData; i++){
        // homeTEl.textContent = teamInfo1;
        // visitTEl.textContent = teamInfo2;
        }
    }))
    .catch(err => console.error(err));



}

// call function
getData();


// var callstring = Data1.Img;
// $("#team1").attr("src", "https://lsm-static-prod.livescore.com/medium/" + callstring);'''
// https://lsm-static-prod.livescore.com/medium/
// this part is what is needed before the Img string to be able to display