var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var MovieSchema = new mongoose.Schema({
    name: String, 
    format: String,
    genre: String
})

MovieSchema.plugin(mongoosePaginate);
const Movies = mongoose.model('Movies', MovieSchema)

module.exports = Movies;