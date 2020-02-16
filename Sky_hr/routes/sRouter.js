var express = require('express');
var router = express.Router();
var userService = require('../services/userService')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('base/index');
});

router.get('/schedule', function(req, res, next){
  //console.log(req);
  userService.selectAll(function (err, result) {
    if(err) {
      let returnJson = JSON.stringify({
        "result" : false,
        "error": err
      })
      res.end(returnJson)
    } else {
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
