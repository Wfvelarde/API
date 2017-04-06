//Dependencies
var express = require('express');
var router = express.Router();

//Models
var Status = require('../models/status');

//Routes
Status.methods(['get', 'put', 'post', 'delete']);
Status.register(router, '/status');

//Return Router
module.exports = router;