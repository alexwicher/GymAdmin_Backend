const RoleService = require('../Services/RoleService.ts')

class RoleController {

    static getAllRoles() {
        return RoleService.getAllRoles()
    }

    static createRole(roleName) {
        return RoleService.createRole(roleName)
    }
}

module.exports = RoleController