// base settings
var config = require('./app/config/default-config');

// imports
var express = require('express');
var path = require('path');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var adminRoutes = require('./app/route/admin-route');
var defaultRoutes = require('./app/route/default-route');
var port = process.env.PORT || config.server.port;

app.use(cookieParser());

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// view engine
app.use(express.static(path.join(__dirname, 'app/public')));
app.set('views', path.join(__dirname, 'app/view'));
app.set('view engine', 'pug');

// express routes
app.use('/admin', adminRoutes);
app.use('/', defaultRoutes);

// server start
app.listen(port);
console.log(`Server Running: http://${config.server.host}:${port}`);