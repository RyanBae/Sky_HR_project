var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var user = new Schema({
    id: String,
    password: String,
    name: String,
    phone: String,
    age: Number,
    store:String,
    position: String,
    createDate : String
});

module.exports = mongoose.model('user', user);