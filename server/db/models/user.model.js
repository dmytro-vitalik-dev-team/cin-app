var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({
    email:{
        type: String,        
        unique: true,
        lowercase: true,
        trim: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    firstName: String,
    lastName: String,
    created: {
        type: Date,
        default: Date.now
    },
    reset_password_token: {
        type: String
    },
    reset_password_expires: {
        type: Date
    }
});

var User = mongoose.model('User', userSchema);
module.exports = User;

module.exports.getUserById = function(id, callback){
    User.findById(id, {password: 0}, callback);
}

module.exports.getUserByEmail = function(email, callback){
    User.findOne({email: email}, callback);
}

module.exports.createUser = function(newUser, callback){
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(newUser.password, salt, function (err, hash) {
            if(err) throw err;
                newUser.password = hash;
                newUser.save(callback);
        })
    })
}

module.exports.comparePassword = function(password, hash, callback){
    bcrypt.compare(password, hash, function (err, isMatch) {
        if(err) throw err;
            callback(null, isMatch);
    })
}