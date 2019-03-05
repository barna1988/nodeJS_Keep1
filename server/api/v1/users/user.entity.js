const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId : {
    type: String,
    unique: true,
    require: true
  },
  username: {
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model('user', userSchema);