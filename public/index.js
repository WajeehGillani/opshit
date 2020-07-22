const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const routes = require('../routes');
const env = require('dotenv').config({ path: '../.env' });

const app = express();
let public = __dirname;

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true}, () =>{
    console.log('Connected to MongoDB...');
});

app.u
app.use(cors());
app.use(express.static(public));
app.use('/', routes);

app.listen(process.env.PORT, () => {
    console.log(`opshit development server started on http://127.0.0.1:${process.env.PORT}`);
});