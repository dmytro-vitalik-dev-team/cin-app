var Roles = require('../../db/models/roles.model');
var UserManagementService = require('../../services/user-management.service');
var jwt_decode = require('jwt-decode');

exports.getUsers = async function(req, res, next){
    var user = jwt_decode(req.headers.authorization.split(' ')[1]);

    try{
        var users = await UserManagementService.getUsers({ }, user._id);
        return res.status(200).json({status: 200, data: users, message: "Succesfully Recieved"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.getRoles = async function(req, res, next){
    try{
        var roles = await UserManagementService.getRoles({ });
        return res.status(200).json({status: 200, data: roles, message: "Succesfully Recieved"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.getUserRoles = async function(req, res, next){
    try{
        var usersRoles = await UserManagementService.getUserRoles({ });
        return res.status(200).json({status: 200, data: usersRoles, message: "Succesfully Recieved"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.getCurrentUserRole = async function(req, res, next){
    try{
        var usersRoles = await UserManagementService.getCurrentUserRole({ });
        return res.status(200).json({status: 200, data: usersRoles, message: "Succesfully Recieved"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createRoles = async function(req, res, next){
    var role = await Roles.find({ roleName: "User" });

    var roles = {
        userId: req.body._id,
        roleId: role[0]._id
    }

    try{
        var createdUserRole = await UserManagementService.createRoles(roles);
        return res.status(200).json({status: 200, data: createdUserRole, message: "Succesfully Recieved role"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.updateRole = async function(req, res, next){
    if(!req.body.id){
        return res.status(400).json({status: 400., message: "Id must be present"})
    }

    let userRole = {
        _id: req.body.id,
        userId: req.body.userId ? req.body.userId : null,
        roleId: req.body.roleId ? req.body.roleId : null,
    }

    try{
        var updateUserRole = await UserManagementService.update(userRole)
        return res.status(200).json({status: 200, data: updateUserRole, message: "Succesfully Update User role"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }
}

exports.removeUserById = async function(req, res, next){
    var id = req.params.id;

    try{
        await UserManagementService.removeUserById(id)
        return  res.status(204).json({status:204, message: "Succesfully User Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }
}