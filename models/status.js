//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema
var statusSchema = new mongoose.Schema({
    status: String
});

//Return model
module.exports = restful.model('LockStatus', statusSchema);