var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    username: String
});

User = mongoose.model('User', UserSchema);

module.exports = User;