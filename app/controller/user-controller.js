var userDAO = require('../dao/user-dao'); 

function UserController() { }
UserController.prototype = {

  create: function(req, res) {

    var dao = new userDAO();
    dao.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    },
    userCreateReturn);

    function userCreateReturn(data) {
      res.json(data);
    }
  },
  findAll: function(req, res) {

    var dao = new userDAO();
    dao.findAll(userFindReturn);

    function userFindReturn(data) {
      res.json(data);
    }
  },
}

module.exports = UserController;