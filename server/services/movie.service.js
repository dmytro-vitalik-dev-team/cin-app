var Movie = require('../db/models/movie.model');

exports.getMovies = async function(){
    try{
        var movies = await Movie.find({});
        return movies;
    }catch(e){
		console.log(e);
    }
}

exports.getMovieById = async function(movieId){
    try{
        var movie = await Movie.findOne({_id: movieId});
        return movie;
    }catch(e){
		console.log(e);
    }
}

exports.updateMovie = async function(movieInfo){
    try{
        var id = movieInfo.id;
        var oldMovie = await Movie.findById(id);

        if(!oldMovie){
            return false;
        }
        
        oldMovie.name = movieInfo.name;
        oldMovie.genre = movieInfo.genre;
        oldMovie.format = movieInfo.format;
        var updatedMovie = await oldMovie.save();
        return updatedMovie;
    }catch(e){
		console.log(e);
    }
}

exports.createMovie = async function(movieInfo){
    try{
        var movie = new Movie({
            name: movieInfo.name,
            genre: movieInfo.genre,
            format: movieInfo.format
        });
        await movie.save();
        return movie._id;
    }catch(e){
		console.log(e);
    }
}

exports.deleteMovie = async function(movieId){
    try{
        var status = await Movie.remove({ _id: movieId });
        return status;
    }catch(e){
		console.log(e);
    }
}