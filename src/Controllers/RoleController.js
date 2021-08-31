const RoleService = require('../Services/RoleService.js')

class RoleController {

    static getAllRoles(request, reply) {
        return RoleService.getAllRoles()
    }

    static getRoleById(request, reply) {
        return RoleService.getRoleById(request.params['id'])
    }

    static createRole(request, reply) {
        return RoleService.createRole(request.body['roleName'])
    }
}

module.exports = RoleController