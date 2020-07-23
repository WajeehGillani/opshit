var express = require('express');
var router = express.Router();

const HomeController = require('../app/controllers/HomeController');

const AuthController = require('../app/controllers/AuthController');

	// Home page route.AuthController
	router.get('/', HomeController.index);

	router.get('/home', HomeController.home);

	//route.get('register', AuthController.register);

	// User Login
    router.post('/api/login', AuthController.login);
	router.get('/login', AuthController.loginUi);
    
    // user SignUp
    router.post('/api/signup', AuthController.signup);
    
module.exports = router;