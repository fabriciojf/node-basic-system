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
    var token = req.headers['x-token'];

    if (token) {
      jwt.verify(token, appsec, jwtVerifyReturn);
    } else {
      return res.status(403).send({
            success: false,
            message: 'No token.'
      });
    }

    function jwtVerifyReturn(err, decoded) {
      if (err) {
        return res.json({
          success: false,
          error: 'User not registered'
        });
      }
      req.decoded = decoded;
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

        res.json({
          success: true,
          token: token
        });
        return;
      } 
      next();
    };
  }
}

module.exports = AuthSecurity;