const GeneralUtils = require("../Utils/GeneralUtils");

class GeneralCS {

    static async getById(modelClass, request, reply) {
        try {
            return await modelClass.findByPk(request.params["id"]);
        } catch (err) {
            reply.send(GeneralUtils.getErrorMsg(err, "Internal Server Error", 500))
        }
    }

    static async getAll(modelClass, request, reply) {
        try {
            return await modelClass.findAll();
        } catch (err) {
            reply.send(GeneralUtils.getErrorMsg(err, "Internal Server Error", 500))
        }
    }

    static async createObject(modelClass, request, reply) {
        try {
            return await modelClass.create(request.body);
        } catch (err) {
            reply.send(GeneralUtils.getErrorMsg(err, "Internal Server Error", 500))
        }
    }

}

module.exports = GeneralCS