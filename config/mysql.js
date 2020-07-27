let mysql = require('mysql');
let env = require('dotenv').config({ path: './.env' });

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect(function(err) {
  	if (err) {
    	return console.error('error: ' + err.message);
    	return console.log('[status: not connected 🔴]');
  	}
   	console.log('[status: connected 🟢]');
});

module.exports = connection;