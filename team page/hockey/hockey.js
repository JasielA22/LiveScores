const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=soccer&Timezone=-7",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "a408df606fmsh7491e59ea2ef50dp179f95jsn710894ff1e2f",
		"X-RapidAPI-Host": "livescore6.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});