var express = require('express');
var router = express.Router();

var user = require('./api/user.route');
var userManagement = require('./api/userManagement.route');
var movies = require('./api/movies.route');

router.use('/auth', user);
router.use('/usermanagement', userManagement);
router.use('/movies', movies);

module.exports = router;