const HomeController  = {

	index (req, res) {
		res.render("welcome");
	},

	home (req, res) {
		res.render("auth/shit")
	}

};

module.exports = HomeController;