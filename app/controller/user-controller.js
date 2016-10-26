var userDAO = require('../dao/user-dao'); 

function UserController() {
}
UserController.prototype = {

  create: function(data, callback) {
    var dao = new userDAO();    
    dao.create(data, callback);    
  },

  setup: function(callback) {
    var dao = new userDAO();    
    dao.create({
      name: 'Fabricio',
      email: 'fabriciojf@gmail.com',
      password: '123'
    }, callback);    
  }
}

module.exports = UserController;