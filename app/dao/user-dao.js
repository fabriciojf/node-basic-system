// default settings
var config = require('../config/default-config');
var user = require('../model/user-model');

// connection prototype
function UserDAO() {
  this.mongoose = require('mongoose');
  this.mongoose.connect(
    'mongodb://'+config.database.host+'/'+config.database.db);
}
UserDAO.prototype = {

  create: function (data, callback) {

    var me = new user(data);
    me.save(meSaveReturn);

    function meSaveReturn(err, me) {
      if (err) throw err;
      callback({
        success: true,
        message: 'User created',
        userData: me
      });
    };

    this.mongoose.connection.close();
  },

  findByName: function (name, callback) {

    user.findOne({
      name: name
    }, userFindOneReturn);

    function userFindOneReturn(err, user) {
      if (err) throw err;
      if (!user) {
        callback({
          success: false,
          message: 'User not found'
        });
      }
      callback(user);
    };

    this.mongoose.connection.close();
  },

  findByEmailAndPass: function (data, callback) {

    user.findOne({
      email: data.email,
      password: data.password
    }, userFindOneReturn);

    function userFindOneReturn(err, user) {
      if (err) throw err;
      if (!user) {
        callback(err, null);
      }
      callback(err, user);
    };

    this.mongoose.connection.close();
  },

  findAll: function (callback) {

    user.find({}, userFindReturn);

    function userFindReturn(err, user) {
      if (err) throw err;
      if (!user) {
        callback({
          success: false,
          message: 'User not found'
        });
      }
      callback(user);
    };

    this.mongoose.connection.close();
  },

  remove: function (name, callback) {

    user.remove({ name: name }, userRemoveReturn);

    function userRemoveReturn(err, result) {
      if (err) throw err;
      callback({
        success: true,
        message: 'User removed'
      })
    };

    this.mongoose.connection.close();
  }
}

module.exports = UserDAO;