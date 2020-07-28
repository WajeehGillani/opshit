const mongoose   = require('mongoose');
const env = require('dotenv').config({ path: './.env' });

const databaseInitializer = async function () {
    mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

    if(process.env.NODE_ENV == "development"){
        mongoose.connection.on('connected', function () {  
            console.log(`Database connection open to ${mongoose.connection.host} ${mongoose.connection.name}`);
        }); 
        
        mongoose.connection.on('error',function (err) {  
        console.log('Mongoose default connection error: ' + err);
        }); 
        
        mongoose.connection.on('disconnected', function () {  
        console.log('Mongoose default connection disconnected'); 
        });
    }
}

module.exports = databaseInitializer;