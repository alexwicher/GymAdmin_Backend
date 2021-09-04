const sequelize = require('./MySequelize.js')
const Router = require("./Router.js")
const config = require("../appConfig");

let serverConfig = require('../appConfig.js').server

class Server {

    static initServer() {
        const fastify = require('fastify')({
            logger: true
        })
        sequelize.initSequelize()

        fastify.register(require('fastify-jwt'), {
            secret: config.server.secretKey
        })

        fastify.addHook("onRequest", async (request, reply) => {
            // request.headers Authorization -> Bearer <JWT>
            try {
                if (config.server.authWhitelist.indexOf(request.context.config.url) < 0)
                    await request.jwtVerify()
            } catch (err) {
                reply.send(err)
            }
        })

        fastify.register(Router.routes)
        fastify.listen(serverConfig.port, function (err, address) {
            if (err) {
                fastify.log.error(err)
                process.exit(1)
            }
        })
    }
}

module.exports = Server


