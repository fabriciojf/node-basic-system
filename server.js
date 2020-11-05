// base settings
  var config = require('./app/config/default-config');

// imports
  var express = require('express');
  var path = require('path');
  var app = express();
  var cookieParser = require('cookie-parser');
  var bodyParser = require('body-parser');
  var mongoose = require('mongoose');
  var defaultRoutes = require('./app/route/default-route');
  var port = process.env.PORT || config.server.port;

  app.use(cookieParser());

// body parser
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

// view engine
  app.use(express.static(path.join(__dirname, 'app/public')));

// express routes
  app.use('/', defaultRoutes);

// server start
  app.listen(port);
  console.log('Server Running: http://' + config.server.host + ':' + port);