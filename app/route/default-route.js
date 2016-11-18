var router = require('express').Router();
var security = require('../security/auth-security');

// Controllers
var userController = require('../controller/user-controller');

// objects
var auth = new security();
var user = new userController();

// default routes
router.get('/', rootRoute);
router.post('/admin/auth', auth.authenticate);
router.use(auth.validate);
router.post('/user', user.create);
router.get('/users', user.findAll);

// route default http://{IP}/bemmelhor/
function rootRoute(req, res) {
  res.json({
    result: 'success',
    description: 'system running'
  });
};

module.exports = router;