// Elements for HTMl

//titles
const title1 = document.getElementById('title1');
const title2 = document.getElementById('title2');

//Getting teams
const team1 = document.getElementById('team1');
const team2 = document.getElementById('team2');

//getting descriptions
const par1 = document.getElementById('par1'); 
const par2 = document.getElementById('par2');


let options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9636731d66msh6b44fd43f272bfap1a4b34jsn8b8f34029b9f',
		'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
	}
};
	var allMyData1
	var allMyData2

fetch('https://livescore6.p.rapidapi.com/matches/v2/list-by-date?Category=soccer&Date=20221209&Timezone=-6', options)
	.then(response => response.json())
	.then(response => {
		allMyData1 = response.Stages[0].Events[0].T1[0];
		allMyData2 = response.Stages[0].Events[0].T2[0];
		console.log(response)
		console.log(allMyData1)
		console.log(allMyData2)
		par1.textContent = allMyData1.Nm;
		team1.textContent = allMyData1.img;
		par2.textContent = allMyData2.Nm;
	})
	.catch(err => console.error(err));

$( function() {
	$( "#datepicker" ).datepicker({
		showButtonPanel: true
	});
} );

var jsDate = $('#datepicker').datepicker('getDate');
if (jsDate !== null) { // if any date selected in datepicker
    jsDate instanceof Date; // -> true
    jsDate.getDate();
    jsDate.getMonth();
    jsDate.getFullYear();
}

console.log(jsDate);
