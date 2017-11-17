var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');


var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var register =require('./routes/register');
var video = require('./routes/vides');
var yuyan = require('./routes/yuyan');
var tonghua = require('./routes/tonghua');
var xiangxi = require('./routes/xiangxi');

var app = express();



var userService = require('./service/userService');

//console.log(userService.getByName('aaa'));
userService.add({'name': '123', "password": '345'});
console.log(userService.getByName('123'));
userService.persistence();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));




app.use(express.static('public'));


app.use(session({
  secret:'cookieParser',
  resave:true,
  saveUninitialized:true,
  cookie:{
    secure:false
  }
}))

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser("cookieParser"));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/login', login);
app.use('/register', register);
app.use('/video', video);
app.use('/yuyan', yuyan);
app.use('/tonghua', tonghua);
app.use('/xiangxi', xiangxi);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

app.listen(3005);

module.exports = app;

