//Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//MongDB
mongoose.connect('mongodb://localhost/locksmith');

//Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
app.use('/api', require('./routes/api'));

app.get('/', function(req, res){
    res.send('working');
});

//Start server
app.listen(3000);
console.log('Running on port 3000...')