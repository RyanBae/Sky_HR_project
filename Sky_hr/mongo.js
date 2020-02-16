var mongoose = require('mongoose');
mongoose.set('debug',true);
var db = mongoose.connection;
db.on('error', console.error);

module.exports = function(host){
    console.log("host :: "+host);
    mongoose.Promise = global.Promise;
    mongoose.connect(host,{useUnifiedTopology: true, useNewUrlParser: true });
    
};
