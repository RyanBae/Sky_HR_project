const schedule = require('../models/schedule');
console.log(schedule)

module.exports = {
    selectAll: function (callback) {
        schedule.find({}, function (err, results) {
            console.log(results);
            callback(err, results);
        })
    },
};