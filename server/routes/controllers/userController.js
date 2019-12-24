var mongoose = require('mongoose'),
  jwt = require('jsonwebtoken'),
  bcrypt = require('bcryptjs'),
  User = require('../../db/models/user.model'),
  config = require('../../config/config'),
  path = require('path'),
  async = require('async'),
  crypto = require('crypto'),
  _ = require('lodash'),
  config = require('../../config/config'),
  nodemailer = require('nodemailer'),
  crypto = require('crypto'),
  algorithm = 'aes-256-ctr',
  cryptoPassword = 'd6F3Efeq';

  var smtpTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: config.email,
      pass: config.pass
    }
  });

exports.forgotPassword = function(req, res) {
    async.waterfall([
    function(done) {
        User.findOne({
        email: req.body.email
        }).exec(function(err, user) {
        if (user) {
            done(err, user);
        } else {
            done('User not found.');
        }
        });
    },
    function(user, done) {
        // create the random token
        crypto.randomBytes(20, function(err, buffer) {
        var token = buffer.toString('hex');
        done(err, user, token);
        });
    },
    function(user, token, done) {
        User.findByIdAndUpdate({ _id: user._id }, { reset_password_token: token, reset_password_expires: Date.now() + 86400000 }, { upsert: true, new: true }).exec(function(err, new_user) {
        done(err, token, new_user);
        });
    },
    function(token, user, done) {
        var mailOptions = {
            from: config.email,
            to: config.email, //user.email,
            subject: 'Password help has arrived!',
            html: "<span>Click on <a href='http://localhost:4200/resetpassword?token=" + encryptToken(token) +"'> THIS </a>  for change password</span>"
        };
        smtpTransport.sendMail(mailOptions, function(err) {
            if (!err) {
            return res.json({ message: 'Kindly check your email for further instructions' });
            } else {
            return done(err);
            }
        });
        }
    ], function(err) {
        return res.status(422).json({ message: err });
    });
};

exports.resetPassword = function(req, res, next) {
    User.findOne({
        reset_password_token: decryptToken(req.body.token),
        reset_password_expires: {
            $gt: Date.now()
        }
    }).exec(function(err, user) {
        if (!err && user) {
        if (req.body.newPassword === req.body.verifyPassword) {
            user.password = bcrypt.hashSync(req.body.newPassword, 10);
            user.reset_password_token = undefined;
            user.reset_password_expires = undefined;
            user.save(function(err) {
            if (err) {
                return res.status(422).send({
                message: err
                });
            } else {
                var mailOptions = {
                    from: config.email,
                    to: config.email, //user.email,
                    subject: 'Password help has arrived!',
                    html: "<p>Your password has been successful reset, you can now login with your new password.</p>"
                };

                smtpTransport.sendMail(mailOptions, function(err) {
                if (!err) {
                    return res.json({ message: 'Password reset' });
                } else {
                    return done(err);
                }
                });
            }
            });
        } else {
            return res.status(422).send({
            message: 'Passwords do not match'
            });
        }
        } else {
        return res.status(400).send({
            message: 'Password reset token is invalid or has expired.'
        });
        }
    });
};

exports.signup = async function(req, res, next){
    var newUser = new User ({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });
    User.createUser(newUser, function (err, user) {
        if(err){
            res.json({success: false, message: 'User is not registered'})
        }else{
            res.json({success: true, message: 'User is registered'})
        }
    })
}

exports.login = async function(req, res, next){
    var email = req.body.email;
    var password = req.body.password;

    User.getUserByEmail(email, function (err, user) {
        if(err) throw err;
        if(!user){
            res.status(401).json({success: false, status: 401, message: "Authentication failed. User not found."});
        }else{
            User.comparePassword(password, user.password, function (err, isMatch) {
            if(err) throw err;
            if(isMatch && !err){
                user.password = undefined;

                var token = jwt.sign(user.toJSON(), config.jwtKey, {expiresIn: '2h'});
                res.json({
                    success: true,
                    token: 'Bearer ' + token,
                    user: {
                        id: user._id,
                        email: user.email
                    }
                });
            }else{
                return res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
            }
        });
        }
    });
}

exports.verifyToken = async function(req, res, next){
    var token = getToken(req.headers);
    if (token) {
            res.json({msg: 'Authorized'});
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
}

exports.logout = async function(req, res, next){
    req.logout();
}

encryptToken = function (token) {
    var cipher = crypto.createCipher(algorithm, cryptoPassword)
    var encrypted = cipher.update(token, 'utf8', 'hex')
    encrypted += cipher.final('hex');
    return encrypted;
};

decryptToken = function (token) {
    var decipher = crypto.createDecipher(algorithm, cryptoPassword)
    var decrypted = decipher.update(token, 'hex', 'utf8')
    decrypted += decipher.final('utf8');
    return decrypted;
};

getToken = function (headers) {
    if (headers && headers.authorization) {
      var parted = headers.authorization.split(' ');
      if (parted.length === 2) {
        return parted[1];
      } else {
        return null;
      }
    } else {
      return null;
    }
};