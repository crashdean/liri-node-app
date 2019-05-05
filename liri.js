require("dotenv").config();
var moment = require('moment');
var fs = require("fs");
var keys = require("./keys.js");
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
  case "movie-this":
    movieSearch();
    break;
  case "do-what-it-says":
    doWhatItSays();
    break;
}

function bandsInTown() {
  axios.get("https://rest.bandsintown.com/artists/" + artistMovieSearch + "/events?app_id=codingbootcamp")
    .then(function (response) {
      console.log(response.data[0].venue.name);
      console.log(response.data[0].venue.city);
      console.log(response.data[0].datetime);
    })
}

function spotifyBands() {
  if (artistMovieSearch) {
    spotify.search({ type: 'track', query: artistMovieSearch, limit: 1 }, function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      console.log("The artist is " + data.tracks.items[0].artists[0].name);
      console.log("The song is " + data.tracks.items[0].name);
      console.log("To preview song click " + data.tracks.items[0].preview_url);
      console.log("The song is from the album " + data.tracks.items[0].name);
    }
    )
  }
  else {
    spotify.search({ type: 'track', query: "The Sign", limit: 1 }, function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      console.log("The artist is " + data.tracks.items[0].artists[0].name);
      console.log("The song is " + data.tracks.items[0].name);
      console.log("To preview song click " + data.tracks.items[0].preview_url);
      console.log("The song is from the album " + data.tracks.items[0].name);
    });
  }
}
function movieSearch() {
  if (artistMovieSearch) {
    axios.get("http://www.omdbapi.com/?t=" + artistMovieSearch + "&y=&plot=short&apikey=trilogy")
      .then(function (response) {
        // console.log(response.data);
        console.log("The Ttitle of the movie is: " + response.data.Title);
        console.log("The year the movie came out is: " + response.data.Year);
        console.log("The rating of this movie is: " + response.data.Rated);
        console.log("The year the movie came out is: " + response.data.Year);
        console.log("The country were the movie was produced: " + response.data.Country);
        console.log("The language of this movie is: " + response.data.Language);
        console.log("The plot of this movie is: " + response.data.Plot);
        console.log("The actors in this movie are: " + response.data.Actors);
      })
  }
  else {
    axios.get("http://www.omdbapi.com/?t=mr.nobody&y=&plot=short&apikey=trilogy")
      .then(function (response) {
        // console.log(response.data);
        console.log("The Ttitle of the movie is: " + response.data.Title);
        console.log("The year the movie came out is: " + response.data.Year);
        console.log("The rating of this movie is: " + response.data.Rated);
        console.log("The year the movie came out is: " + response.data.Year);
        console.log("The country were the movie was produced: " + response.data.Country);
        console.log("The language of this movie is: " + response.data.Language);
        console.log("The plot of this movie is: " + response.data.Plot);
        console.log("The actors in this movie are: " + response.data.Actors);
      })
  }
}

function doWhatItSays() {
  fs.readFile("random.txt", "utf8", function (error, data) {
    if (error) {
      return console.log(error);
    }
    // console.log(data);
    var dataArr = data.split(",");
    // console.log(dataArr[1]);
    var song = dataArr[1];
    // console.log(song);
    spotify.search({ type: 'track', query: song, limit: 1 }, function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      console.log("The artist is " + data.tracks.items[0].artists[0].name);
      console.log("The song is " + data.tracks.items[0].name);
      console.log("To preview song click " + data.tracks.items[0].preview_url);
      console.log("The song is from the album " + data.tracks.items[0].name);
    }
    )
  });
}


