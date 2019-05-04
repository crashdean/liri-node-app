// require("dotenv").config();

var axios = require("axios");




var commandQuery = process.argv[2];
var search = process.argv.slice(3).join(" ");

  switch (commandQuery) {
    case "concert-this":
    console.log(search);
    bandsInTown();
      break;
      case "spotify-this-song":
  what();
      break;
     case  "movie-this":
    now();
      break;
      case "do-what-it-says":
    yes();
      break;
  
  }





function bandsInTown() {
axios.get("https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp")
  .then(function(response) {
    
    console.log(response.data[0].venue.name);
    console.log(response.data[0].venue.city);
    console.log(response.data[0].datetime);
    
  })

}