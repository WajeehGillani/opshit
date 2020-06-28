const program = require('commander');
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const routes = require('../routes');
const env = require('dotenv').config({ path: './.env' });

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

program
  .option('-v, --version', '1.0.1')
  .version('1.0.1')

program
  .command('serve')
  .action(() => {
    const app = express();
    app.use(cors());
    app.use('/', routes);
    app.listen(process.env.PORT, () => {
      console.log(`opshit development server started on http://127.0.0.1:${process.env.PORT}`);
    });
  });

program
  .command('make:ctrl <ctrlname>') // No need of specifying arguments here
  .alias('controller')
  .description('create a controller')
  .action((ctrlname) => {
    fs.writeFile('app/controllers/'+ctrlname +'Controller.js', 'exports.'+ctrlname+'Controller = (req, res, next) => { \n\n};', function (err) {
      if (err) throw err;
      console.log(ctrlname+'Controller is created successfully.');
    });
  });

module.exports = program;