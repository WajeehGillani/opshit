const AuthController = { 
	login (req, res) {
		res.render("auth/auth");
	}
}; 

module.exports = AuthController;