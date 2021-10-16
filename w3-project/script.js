/* Format */
// baseURL + /version/service/id/method/?parameters

// GET /search/artist/?q=eminem&index=0&limit=2&output=xml

const baseURL = "https://api.deezer.com"
// const API_KEY = "";
// let path = "/listings/latest";
// let exampleParams = "?start=1&limit=100&convert=USD";
// const authorizationParam = `&CMC_PRO_API_KEY=${API_KEY}`;
// const url = baseURL+path+exampleParams+authorizationParam;

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=borns", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "383eb7fa10mshe225132d64e51d2p12755fjsnbb80d8f1a76f"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

//