const config = require('../../appConfig.js')
const User = require("../Models/User");

class UserController {
    static async getAllEmployees(request, reply) {
        return Promise.resolve(undefined);
    }

    static async getAllClients(request, reply) {
        return Promise.resolve(undefined);
    }

    static async getAllUsers(request, reply) {
        return Promise.resolve(undefined);
    }

    static async getUserById(request, reply) {
        return Promise.resolve(undefined);
    }

    static async createUser(request, reply) {
        return Promise.resolve(undefined);
    }

    static async signUp(req, reply, fastify) {
        let user = await User.findOne({where: {userName: req.body["userName"]}})
        if (user.passwordHash === req.body["password"]) {
            const token = fastify.jwt.sign({userId: user.id}, {expiresIn: config.server.jwtExpire})
            reply.send({token})
        }
    }

    static async refreshJWT(req, reply, fastify) {
        const userId = req.userId
        const token = fastify.jwt.sign({userId: userId}, {expiresIn: config.server.jwtExpire})
        reply.send({token})
    }
}

module.exports = UserController