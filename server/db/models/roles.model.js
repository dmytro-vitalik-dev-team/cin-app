var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var RolesSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    }
})

RolesSchema.plugin(mongoosePaginate)
const Roles = mongoose.model('Role', RolesSchema)

module.exports = Roles;