var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoConnect = require("./config/database");
const mongoose = require('mongoose');
var estudiantesRouter = require("./routes/estudiantes.router");
const auth = require('./auth/main_auth');
const usuariosRouter = require("./routes/usuarios.router");
const cors = require("cors");
require('dotenv').config();



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

//Database conecction

mongoose.set('strictQuery', false);


app.listen(3001,() =>{
  console.log('API escuchando en el puerto ' + 3001)

})



mongoConnect.mongoConnect()

app.use('/usuarios',usuariosRouter)
app.use(auth) 

app.use('/estudiantes', estudiantesRouter)



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
