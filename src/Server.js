const sequelize = require('./MySequelize.js')
const Router = require("./Router.js")
const config = require("../appConfig");
const User = require("./Models/User");
const GeneralUtils = require("./Utils/GeneralUtils");

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
                    await request.jwtVerify(async (err, decoded) => {
                        if (err == null) {
                            let currentSessionJWT = await User.findByPk(decoded.userId)
                            if (currentSessionJWT.sessionJWT !== GeneralUtils.getJWT(request)) {
                                reply.send(GeneralUtils.getErrorMsg("Not current user's session.", "Unauthorized", 401))
                            }
                        }
                    })
            } catch (err) {
                reply.send(err)
            }
        })

        fastify.register(Router.routes)
        fastify.register(require("fastify-cors"), {
            origin: "http://127.0.0.1:4200/",
            methods: ["POST"]
        });
        fastify.listen(serverConfig.port, function (err, address) {
            if (err) {
                fastify.log.error(err)
                process.exit(1)
            }
        })
    }
}

module.exports = Server


