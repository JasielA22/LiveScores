const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0ab2c0792amshb512595321617c6p1192acjsne463b00c17c1',
		'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
	}
};

fetch('https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=basketball&Timezone=-7', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));