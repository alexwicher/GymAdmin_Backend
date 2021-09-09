const config = require('../../appConfig.js')
const User = require("../Models/User");

class UserCS {

    static async signUp(req, reply, fastify) {
        let user = await User.findOne({where: {userName: req.body["userName"]}})
        if (user.passwordHash === req.body["password"]) {
            const token = fastify.jwt.sign({userId: user.id}, {expiresIn: config.server.jwtExpire})
            user.sessionJWT = token
            await user.save()
            reply.send({token})
        }
    }

    static async refreshJWT(req, reply, fastify) {
        let user = await User.findByPk(req.user.userId)
        const token = fastify.jwt.sign({userId: user.id}, {expiresIn: config.server.jwtExpire})
        user.sessionJWT = token
        await user.save()
        reply.send({token})
    }
}

module.exports = UserCS