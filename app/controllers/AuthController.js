const auth = require('../../resources/views/auth/auth.shit')

const AuthController = { 
	login (req, res) {
		res.send(auth.html)
	}
}; 

module.exports = AuthController;