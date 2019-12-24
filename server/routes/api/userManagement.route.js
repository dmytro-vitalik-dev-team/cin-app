var express = require('express');

var router = express.Router();
var UserManagementController = require('../controllers/userManagementController');

router.get('/', UserManagementController.getUsers)
router.get('/getUserRoles', UserManagementController.getUserRoles)
router.get('/getRoles', UserManagementController.getRoles)
router.get('/getCurrentUserRole', UserManagementController.getCurrentUserRole)
router.put('/update', UserManagementController.updateRole)
router.post('/create', UserManagementController.createRoles)
router.delete('/:id', UserManagementController.removeUserById)

module.exports = router;