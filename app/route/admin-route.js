// base settings
var config = require('../config/default-config');

// imports
var router = require('express').Router();
var user = require('../model/user-model');
var security = require('../security/auth-security');

var auth = new security();
var logged = false;

// login route
// and return token
// http://localhost:PORT/admin/auth
router.post('/auth', auth.authenticate); 
router.use(auth.validate);
router.get('/', gotoBase);
router.get('/logoff', auth.logoff);
router.get('/users', gotoUsers);

// base route 
// http://localhost:PORT/admin
function gotoBase(req, res) {
    res.render('dashboard');
};

// user route
// http://localhost:PORT/admin/users
function gotoUsers(req, res) {
    res.render('dashboard');
};

module.exports = router;