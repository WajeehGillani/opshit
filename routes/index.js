var express = require('express');
var router = express.Router();

const HomeController = require('../app/controllers/HomeController');

const AuthController = require('../app/controllers/AuthController');

	// Home page route.AuthController
	router.get('/', HomeController.index);

	router.get('/login', AuthController.loginUi);

	router.get('/register', AuthController.registerUi);

	// User Login
    router.post('/login', AuthController.login);
    
    // user SignUp
    router.post('/register', AuthController.signup);
    
module.exports = router;