var router = require('express').Router();

var userController = require('../controller/user-controller');
var security = require('../security/auth-security');

var auth = new security();

// default routes
router.get('/', gotoBase);
router.get('/login', gotoLogin);
router.get('/user', gotoUser);
router.post('/user', gotoUserSave);
router.get('/user/add', gotoUserAdd);
router.get('/setup', gotoSetup);
router.all('*', goto404); // pagina nao existe

// routes actions
function gotoBase(req, res) {
  res.render('index');
};

function gotoLogin(req, res) {
  res.render('index');
};

function gotoUser(req, res) {
  res.render('user/user-index');
};

function gotoUserAdd(req, res) {
  res.render('user/user-add');
};

function gotoUserSave(req, res) {
  var user = new userController();
  user.create(req.body, userSaveReturn);

  function userSaveReturn(data) {
    res.render('user/login', data);
  }
};

// cria um usuario basico
function gotoSetup(req, res) {

  var user = new userController();
  user.setup(userCreateReturn);
  
  function userCreateReturn() {
    res.render('user/user-index');
  }
};

function goto404(req, res) {
  res.render('error404');
};

module.exports = router;