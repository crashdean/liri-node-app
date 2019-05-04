require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js")
var axios = require("axios");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var commandQuery = process.argv[2];
var artistMovieSearch = process.argv.slice(3).join(" ");
  switch (commandQuery) {
    case "concert-this":
    console.log(artistMovieSearch);
    bandsInTown();
      break;
      case "spotify-this-song":
    spotifyBands();
      break;
     case  "movie-this":
    movieSearch();
      break;
      case "do-what-it-says":
      doWhatItSays();
      break;
  }

function bandsInTown() {
axios.get("https://rest.bandsintown.com/artists/" + artistMovieSearch + "/events?app_id=codingbootcamp")
  .then(function(response) {  
    console.log(response.data[0].venue.name);
    console.log(response.data[0].venue.city);
    console.log(response.data[0].datetime);   
  })
}

function spotifyBands() {
  spotify.search({ type: 'track', query: artistMovieSearch, limit: 1 }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });
}

function movieSearch() {
  axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy")
    .then(function(response) {  
      console.log(response.data);
      // console.log(response.data[0].venue.city);
      // console.log(response.data[0].datetime);   
    })
  }

  function doWhatItSays() {
  fs.readFile("random.txt", "utf8", function(error, data) {

    
    if (error) {
      return console.log(error);
    }
  
   
    console.log(data);
  
    
    var dataArr = data.split(",");
  
    
    console.log(dataArr);
  
  });
}