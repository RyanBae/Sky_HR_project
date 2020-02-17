var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schedule = new Schema({
    id: String,
    name: String,

});

// schedule.methods.insertSchedule = function(obj, callback){
//     this.id = obj.id;
//     this.name = obj.name;
// }

module.exports = mongoose.model('schedule', schedule);