var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const USER = {
    name: String, 
    email: String,
    password: { type: String, select: false }
}

// mongodb model
module.exports = mongoose.model('User', new Schema(USER));