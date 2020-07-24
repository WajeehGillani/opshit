const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const chalk = require('chalk');

const routes = require('../routes');
const env = require('dotenv').config({ path: './.env' });

let app = express();
let public = __dirname.substring(0, __dirname.length-3) + 'public';

app.use(cors());
app.use(express.static(public));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use('/', routes);

app.listen(process.env.PORT, (err) => {
  if (err) console.error('❌ Unable to connect the server: ', err);
  console.log(chalk.green(`🌍 opshit development server started on http://127.0.0.1:${process.env.PORT}`));
});

module.exports = app;