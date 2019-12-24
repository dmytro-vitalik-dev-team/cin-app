var express = require('express');
var router = express.Router();
var UserController = require('../controllers/userController');
var passport = require('passport');

router.post('/signup', UserController.signup)
router.post('/login', UserController.login)   
router.get('/logout', UserController.logout)
router.post('/forgotpassword', UserController.forgotPassword)
router.post('/resetpassword', UserController.resetPassword)
router.get('/verifyToken', passport.authenticate('jwt', {session: false}), UserController.verifyToken)

module.exports = router;