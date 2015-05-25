var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    methodoverride = require('method-override'),
    errorHandler = require('errorHandler'),
    morgan = require('morgan');

app.use(express.static(__dirname + '/app'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(methodoverride());

if (process.env.NODE_ENV === 'development') {
  app.use(errorHandler());
}

module.exports = app;