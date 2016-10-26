var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// user mongodb model
module.exports = mongoose.model('User', new Schema({ 
    name: String, 
    email: String,
    password: { type: String, select: false }
}));