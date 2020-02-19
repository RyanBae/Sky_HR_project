const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
    id: {type: String, required: true},
    name: {type: String, required: true}

});

// schedule.methods.insertSchedule = function(obj, callback){
//     this.id = obj.id;
//     this.name = obj.name;
// }

module.exports = (connectionPool) => {
    let model = connectionPool.model('schedule', scheduleSchema);
    return model;
};

 //module.exports = mongoose.model('schedule', scheduleSchema);