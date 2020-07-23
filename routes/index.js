var express = require('express');
var router = express.Router();

const HomeController = require('../app/controllers/HomeController');

const AuthController = require('../app/controllers/AuthController');

	// Home page route.AuthController
	router.get('/', HomeController.index);

	router.get('/home', HomeController.home);

	router.get('/login', AuthController.loginUi);

	// User Login
    router.post('/login', AuthController.login);
    
    // user SignUp
    router.post('/api/signup', AuthController.signup);
    
module.exports = router;