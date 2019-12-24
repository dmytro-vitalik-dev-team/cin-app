var MovieService = require('../../services/movie.service');

exports.getMovies = async function(req, res, next){
    try{
        var movies = await MovieService.getMovies();
        return res.status(200).json({status: 200, data: movies, message: "Successfully received movies"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.getMovieById = async function(req, res, next){
    try{
        var movieId = req.params.id;
        var movie = await MovieService.getMovieById(movieId);
        return res.status(200).json({status: 200, data: movie, message: "Successfully received movie"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.updateMovie = async function(req, res, next){
    try{
        var newMovieInfo = req.body;
        var movies = await MovieService.updateMovie(newMovieInfo);
        return res.status(200).json({status: 200, data: movies, message: "Successfully updated movie"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createMovie = async function(req, res, next){
    try{
        var movieInfo = req.body;
        var movieId = await MovieService.createMovie(movieInfo);
        return res.status(200).json({status: 200, data: movieId, message: "Successfully created movie"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.deleteMovie = async function(req, res, next){
    try{
        var movieId = req.params.id;
        var result = await MovieService.deleteMovie(movieId);
        return res.status(200).json({status: 200, data: result, message: "Succesfully deleted movie"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}