const RoleController = require('./Controllers/RoleController.js')

class Router {

    static async routes(fastify, options) {
        fastify.get('/', async (request, reply) => {
            return {hello: 'WHAT ARE YOU DOING IN MY SWAMP??!!!!'}
        })

        fastify.get('/roles', async (request, reply) => {
            return RoleController.getAllRoles(request, reply)
        })

        fastify.post('/roles/create', async (request, reply) => {
            return RoleController.createRole(request, reply)
        })
    }

}


module.exports = Router