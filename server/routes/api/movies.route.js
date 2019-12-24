var express = require('express');
var router = express.Router();
var MovieController = require('../controllers/movieController');
var passport = require('passport');

router.get('/', MovieController.getMovies);
router.get('/:id', MovieController.getMovieById);
router.put('/update', MovieController.updateMovie);
router.post('/create', MovieController.createMovie);
router.delete('/:id', MovieController.deleteMovie);

module.exports = router;