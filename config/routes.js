var express = require('express');
var router = express.Router();

var weatherController = require('../controllers/weatherController')

router.get('/weather', weatherController.show)


module.exports = router;
