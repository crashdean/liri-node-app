// require("dotenv").config();

var axios = require("axios");


// var movieName = process.argv[2];
// var key =  be12d235


// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// console.log(queryUrl);

// axios.get(queryUrl).then(
//   function(response) {
//     console.log("Release Year: " + response.data.Year);
//     console.log(response.data);
//   }
// );

var search = process.argv[2];

var artist = process.argv.slice(2).join(" ");
console.log(artist);

axios
  .get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
  .then(function(response) {
    // If the axios was successful...
    // Then log the body from the site!
    console.log(response.data[0].venue.name);
    // var Artist = function() {
    //     this.venueName = response.venue.name;
    //     this.location = location;
    //     this.date = date;
    // }
  })

  