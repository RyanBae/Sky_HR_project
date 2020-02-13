var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('base/index');
});

router.get('/schedule', function(req, res, next){
  res.render('schedule/index');
})

router.get('/schedule/history', function(req, res, next){
  res.render('schedule/history');
})


module.exports = router;
