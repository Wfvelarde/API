//Dependencies
var express = require('express');
var router = express.Router();

//Models
var Product = require('../models/status');

//Routes
router.get('/status', function(req, res){
    res.send('api is working')
});

//Return Router
module.exports = router;