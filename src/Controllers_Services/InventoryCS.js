const GeneralUtils = require("../Utils/GeneralUtils");
const Inventory = require("../Models/Inventory");

class InventoryCS {

    static async getInventoryOfFacility(request, reply) {
        try {
            return await Inventory.findAll({where: {facility: request.params["id"]}});
        } catch (err) {
            reply.send(GeneralUtils.getErrorMsg(err, "Internal Server Error", 500))
        }
    }

}

module.exports = InventoryCS