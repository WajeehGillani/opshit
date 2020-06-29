var express = require('express');
var router = express.Router();

const HomeController = require('../app/controllers/HomeController');

//const AuthController = require('../app/controllers/AuthController');

	// Home page route.AuthController
	router.get('/', HomeController.index);

	router.get('/home', HomeController.home);

	//route.get('register', AuthController.register);

	//route.get('login', AuthController.login);

module.exports = router;