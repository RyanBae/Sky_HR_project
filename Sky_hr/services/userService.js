const User = require('../models/user');

module.exports = {
    selectAll: function (callback) {
        //console.log("!!!!"+User)
        User.find({}, function (err, results) {
            callback(err, results);
        })
    }
};