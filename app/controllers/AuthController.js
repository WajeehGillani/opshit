const auth = require('../../views/auth/auth.shit')

const AuthController = { 
	login (req, res) {
		res.send(auth.html)
	}
}; 

module.exports = AuthController;