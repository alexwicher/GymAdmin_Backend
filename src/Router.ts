const RoleController = require('./Controllers/RoleController.ts')

class Router {

    static async routes(fastify, options) {
        fastify.get('/', async (request, reply) => {
            return {hello: 'WHAT ARE YOU DOING IN MY SWAMP??!!!!'}
        })

        fastify.get('/roles', async (request, reply) => {
            return RoleController.getAllRoles()
        })
    }

}


module.exports = Router