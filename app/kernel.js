const program = require('commander');
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');


program
  .option('-v, --version', '1.0.1')
  .version('1.0.1')
  .action(() => {
    clear();

    console.log(
      chalk.green(
        figlet.textSync('opshit', { horizontalLayout: 'full' })
      )
    );
  })

program
  .command('serve')
  .alias('dev')
  .description('Serve the application')
  .action(() => {
    const server = require('./server');
  });

program
  .command('make:ctrl <ctrlname>') // No need of specifying arguments here
  .alias('create:controller')
  .description('create a controller')
  .action((ctrlname) => {
    fs.writeFile('app/controllers/'+ctrlname +'Controller.js', 'const '
      +ctrlname+'Controller = { \n\n}; \n\nmodule.exports = '+ctrlname+'Controller;', 
      function (err) {
        if (err) throw err;
        console.log(ctrlname+'Controller created successfully.');
        process.exit(1);
      });
  });

program
  .command('make:model <modelname>')
  .alias('create:model')
  .description('create a model')
  .action((modelname) => {
    fs.writeFile('app/models/'+modelname +'.js', 'const '
      +modelname+' = { \n\n}; \n\nmodule.exports = '+modelname, 
      function (err) {
        if (err) throw err;
        console.log(modelname+'Model created successfully.');
        process.exit(1);
      });
  });

module.exports = program;