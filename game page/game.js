const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
	}
};

fetch('https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=soccer&Timezone=-7', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));