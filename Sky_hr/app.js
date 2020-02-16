var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var url = require('url');
var querystring = require('querystring');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')


var sRouter = require('./routes/sRouter');
var vwRouter = require('./routes/vw');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/')));


//bodyParser 설정 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// var router = require('./routes')(app)

// //run server
// var server = app.listen(port, function(){
//   console.log("Express server has started on port " + port);
// });

//add Router - 위에 라우터 require 하고 난뒤 사용.
app.use('/', sRouter);
app.use('/vw', vwRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
