const Role = require('../Models/Role.js')

class RoleService {
    static async getAllRoles() {
        return await Role.findAll()
    }
    static async getRoleById(id) {
        return await Role.findByPk(id)
    }

    static async createRole(roleName) {
        return await Role.create({roleName: roleName})
    }
}

module.exports = RoleService