var userDAO = require('../dao/user-dao'); 

function UserController() {
}
UserController.prototype = {

  create: function(data, callback) {
    var dao = new userDAO();    
    dao.create(data, callback);    
  },
}

module.exports = UserController;