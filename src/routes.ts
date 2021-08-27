async function routes (fastify, options) {
    fastify.get('/', async (request, reply) => {
        return { hello: 'WHAT ARE YOU DOING IN MY SWAMP??!!!!' }
    })
}

module.exports = routes