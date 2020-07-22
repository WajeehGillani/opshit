const HomeController  = {

	index (req, res) {
		res.render("Welcome");
	},

	home (req, res) {
		res.render("Home");
	}

};

module.exports = HomeController;