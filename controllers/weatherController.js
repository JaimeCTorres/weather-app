var axios = require('axios')

function show(req, res) {
  // Parsing out the query string sent over from Angular so I have access to my user's data
  var address = req.query.address

  //Third party API where I am injecting my user information.
  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}`)
  .then(function (response) {
    //Extracting the LAT and LNG from the Google API's response object.
    var lng = response.data.results[0].geometry.location.lng
    var lat = response.data.results[0].geometry.location.lat
    var key = process.env.API_KEY

    //Using the LAT and LNG as paramaters in my next 3rd party API call.
    return axios.get(`https://api.darksky.net/forecast/${key}/${lat},${lng}`)
  }).then(function (response) {
    //Creating a custom response object to send back to Angular.
    res.json({temp:response.data.currently.temperature, forecast:response.data.currently.summary});
  })
  .catch(function (error) {
    console.log(error);
  });
}

module.exports = {
  show: show
}
