var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/move', function(req, res, next) {
    // const mongoose = require('mongoose');
    // mongoose.connect('mongodb://localhost:27017/sky')
    // let db = mongoose.connection;
    // db.on('error', function(){
    //   console.log('Failed');
    // })
    // db.once('open', function(){
    //   console.log('Connected')
    // })
    
    // let scheduleModel = mongoose.Schema({
    //   id: {type: String, required: true},
    //   name: {type: String, required: true}
    // })
    // let schedules = mongoose.model('schedules', scheduleModel);

    // schedules.find(function(err, schedules){
    //   if(err){
    //     console.log(err);
    //   }else{
    //     console.log(schedules)
    //   }
    // })


  res.render('dbTest');
});

module.exports = router;
