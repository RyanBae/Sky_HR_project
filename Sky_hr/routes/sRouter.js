var express = require('express');
var router = express.Router();
var userService = require('../services/userService')
var schedulService = require('../services/scheduleService')
var userModel = require('../models/user')
var scheduleModel = require('../models/schedule')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('base/index');
});

router.get('/schedule', async function(req, res, next){
  try {
    var findItems =  await scheduleModel.find({name:"ryan"});
    console.log(findItems)
  } catch (error) {
    console.log(error)
  }

  // console.log(req);
  schedulService.selectAll(function (err, result) {
    if(err) {
      let returnJson = JSON.stringify({
        "result" : false,
        "error": err
      })
      res.json(returnJson)
    } else {
      //res.json(result)
      res.end(JSON.stringify(result))
      console.log("result :: "+result)
    }
  })
  res.render('schedule/index');
})

router.get('/schedule/detail', function(req, res, next){
  res.render('schedule/detail');
})

router.get('/schedule/history', function(req, res, next){
  res.render('schedule/history');
})


module.exports = router;
