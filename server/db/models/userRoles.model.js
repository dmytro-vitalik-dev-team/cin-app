var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var UserRolesSchema = new mongoose.Schema({
    userId: String,       
    roleId: String
})

UserRolesSchema.plugin(mongoosePaginate)
const Roles = mongoose.model('userRoles', UserRolesSchema)

module.exports = Roles;