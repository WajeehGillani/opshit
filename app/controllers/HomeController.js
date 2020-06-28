const welcome = require('../../resources/views/Welcome.shit')
const Home = require('../../resources/views/Home.shit')

const HomeController  = {

	index (req, res) {
		res.send(welcome.html)
	},

	home (req, res) {
		res.send(Home.home)
	}

};

module.exports = HomeController;