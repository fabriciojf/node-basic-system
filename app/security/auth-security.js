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
    if (req.cookies.xtoken !== 'undefined') {
      var token = req.cookies.xtoken;
    }
    
    if (token) {
      jwt.verify(token, appsec, jwtVerifyReturn);
    } else {
      res.render('user/login');
      return;
    }

    function jwtVerifyReturn(err, decoded) {
      if (err) {
        res.render('user/login');
        return;
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
      if (user) {

        // token generated expires in 24h
        var token = jwt.sign(user, appsec, {
          expiresIn: 1440
        });

        res.cookie('xtoken', token);
        res.render('dashboard', {
          success: false,
          message: 'Welcome '+user.name
        });
        return;
      }
      res.render('user/login', {
        success: false,
        message: 'Invalid User or Password'
      });
    };
  },

  logoff: function(req, res) {
    res.clearCookie('xtoken');
    res.render('index');
    return;
  }
}

module.exports = AuthSecurity;