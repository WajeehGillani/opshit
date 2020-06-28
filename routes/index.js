var express = require('express');
var router = express.Router();

const HomeController = require('../app/controllers/HomeController')

	// Home page route.
	router.get('/', HomeController.index);

	// Sample page route.
	router.get('/home', HomeController.home);

module.exports = router;