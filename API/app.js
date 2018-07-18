var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
let bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')

var indexRouter = require('./routes/index');
var movieRouter = require('./routes/movies');

var app = express();

mongoose.connect('mongodb://localhost:27017/allocine', { useNewUrlParser: true })

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'))
}

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve public files
app.use('/public', express.static('public'));


app.use('/', indexRouter);
app.use('/movies', movieRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
