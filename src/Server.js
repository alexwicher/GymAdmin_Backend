const sequelize = require('./MySequelize.js')
const Router = require("./Router.js")

let serverConfig = require('../appConfig.js').server

class Server {
    static fastify = require('fastify')({
        logger: true
    })

    static initServer() {
        sequelize.initSequelize()
        Server.fastify.register(Router.routes)
        Server.fastify.listen(serverConfig.port, function (err, address) {
            if (err) {
                Server.fastify.log.error(err)
                process.exit(1)
            }
        })
    }
}

module.exports = Server

