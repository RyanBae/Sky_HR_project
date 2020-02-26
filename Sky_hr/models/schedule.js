const mongoose = require('mongoose');
const db = require('./index');

//console.log(db)


//const Schema = ;

const scheduleSchema = mongoose.Schema({
    id: {type: String, required: true},
    name: {type: String, required: true}

});

// schedule.methods.insertSchedule = function(obj, callback){
//     this.id = obj.id;
//     this.name = obj.name;
// }

// module.exports = (db) => {
//     let model = mongoose.model('schedules', scheduleSchema)
//     //let model = db.model('schedules', scheduleSchema);
//     console.log()
//     model.find(function(err, result){
//         console.log(result)
//     })
//     return model;
// };

 module.exports = mongoose.model('schedules', scheduleSchema);