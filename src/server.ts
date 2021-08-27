const MySequelize =  require('./MySequelize.ts');

let serverConfig = require('../appConfig.js').server

class Server {

    static fastify = require('fastify')({
        logger: true
    })

    static initServer() {
        MySequelize.initSequelize()
        Server.fastify.register(require('./routes.ts'))
        Server.fastify.listen(serverConfig.port, function (err, address) {
            if (err) {
                Server.fastify.log.error(err)
                process.exit(1)
            }
        })

    }

}

module.exports = Server


