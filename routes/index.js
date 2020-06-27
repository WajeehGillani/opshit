var express = require('express');
var router = express.Router();

const HomeController = require('../app/controllers')

// Home page route.
router.get('/', HomeController.home)

// About page route.
router.get('/about', function (req, res) {
  res.send('About this wiki');
})

module.exports = router;