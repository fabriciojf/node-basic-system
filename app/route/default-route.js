  var router = require('express').Router();
  var security = require('../security/auth-security');

// Controllers
  var userController = require('../controller/user-controller');

// objects
  var auth = new security();
  var user = new userController();

  router.post('/', function (req, res) {
      console.log(req.body);
      res.json({
          result: 'success',
          description: 'ok'
      })
  });

  module.exports = router;
