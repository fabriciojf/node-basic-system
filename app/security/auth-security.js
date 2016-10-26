// base settings
var config = require('../config/default-config');

// imports
var jwt = require('jsonwebtoken');
var user = require('../model/user-model');
var userDAO = require('../dao/user-dao');

var appsec = config.secret.key;

function AuthSecurity() { }
AuthSecurity.prototype = {

  // token validation
  validate: function (req, res, next) {

    var token = 'undefined';
    if (req.cookies.xtoken !== 'undefined') {
      token = req.cookies.xtoken;
    }
    
    if (token) {
      jwt.verify(token, appsec, jwtVerifyReturn);
    } else {
      return res.render('user/login');
    }

    function jwtVerifyReturn(err, decoded) {
      if (err) {
        return res.render('user/login');
      }
      next();
    }
  },

  // user authentication
  authenticate: function (req, res, next) {
    dao = new userDAO();

    // user database validate
    dao.findByEmailAndPass(req.body, userFindOneReturn);
    function userFindOneReturn(err, user) {
      if (err) throw err;
      if (!user) {
        res.render('user/login', {
          success: false,
          message: 'User not found'
        });
      } 
      else if (user) {

        // token generated expires in 24h
        var token = jwt.sign(user, appsec, {
          expiresIn: 1440
        });

        res.cookie('xtoken', token);
        res.render('dashboard', {logged: true});
      }
    };
  },

  logoff: function(req, res) {
    res.clearCookie('xtoken');
    res.render('index');
  },

  isLogged: function(req) {
    var token = 'undefined';
    if (req.cookies.xtoken !== 'undefined') {
      token = req.cookies.xtoken;
    }
    
    if (token) {
      jwt.verify(token, appsec, jwtVerifyReturn);
    }
    return false;

    function jwtVerifyReturn(err, decoded) {
      if (err) {
        return false;
      }
      return true;
    }
  }
}

module.exports = AuthSecurity;