const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../../db/models/user.model');
const config = require('../../config/config');
var passport = require('passport');

    var opts = {}
        opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
        opts.secretOrKey = config.jwtKey;

    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {       
        User.getUserById(jwt_payload._id, function(err, user) {
            if (err) { return done(err, false);}
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));