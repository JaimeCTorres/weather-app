var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var routes = require('./config/routes');
var PORT = process.env.PORT || 3000;
var app = express();

require('dotenv').load()
// mount all routes with appropriate base paths
app.use('/', routes);

//connect front end to back end
app.use(express.static(path.join(__dirname, 'public')));

// Mountin BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(PORT, function(){
  console.log('Listening on PORT 3000');
})

module.exports = app;
