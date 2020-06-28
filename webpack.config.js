const resolve = require('path').resolve;

module.exports = {
  entry: './public/',
  output: {
    // If path is missing, it's default value is './'
    path: resolve('./'),
    filename: './dist/bundle.js'
  }
};