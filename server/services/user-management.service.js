var UserRoles = require('../db/models/userRoles.model');
var User = require('../db/models/user.model');

exports.getUsers = async function(query, userId){
    try{
        var users = await User.find({_id: {$ne: userId} }, {email: 1, firstName: 1, lastName: 1});
        return users;
    }catch(e){
		throw Error('Error while getting users')
    }
}

exports.getRoles = async function(query){
    try{
        var roles = await Roles.find({ });
        return res.status(200).json({status: 200, data: roles, message: "Succesfully Recieved"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.getUserRoles = async function(query){
    try{
        var usersRoles = await UserRoles.find({ });
        return usersRoles;
    }catch(e){
        throw Error('Error while getting user roles')
    }
}

exports.getCurrentUserRole = async function(query, user){
    try{
        var userRole = await UserRoles.find({ _id: user._id});
        var currentUserRole = await User.find({ _id: userRole.roleId});
        return res.status(200).json({status: 200, data: currentUserRole[0].name, message: "Succesfully Recieved"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createRoles = async function(role){
    var newUserRoles = new UserRoles({
        userId: role.userId,
        roleId: role.roleId
    })

    try{
        var savedUserRoles = await newUserRoles.save()
        return savedUserRoles;
    }catch(e){
        throw Error("Error while Creating User Roles")
    }
}

exports.update = async function(userRole){
    var id = userRole._id;

    try{
        var oldUserRole = await UserRoles.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the User Role")
    }

    if(!oldUserRole){
        return false;
    }
    
    oldUserRole.username = userRole.username;
    oldUserRole.roleId = userRole.roleId;
    
    try{
        var savedUserRole = await oldUserRole.save()
        return savedUserRole;
    }catch(e){
        throw Error("And Error occured while updating the User Role");
    }
}

exports.removeUserById = async function(id){
    try{
        await User.deleteOne({_id: id})
        return true;
    }catch(e){
        throw Error("Error Occured while Deleting the User")
    }
}