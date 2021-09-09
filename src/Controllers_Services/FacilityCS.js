const GeneralUtils = require("../Utils/GeneralUtils");
const FacilitySchedule = require("../Models/FacilitySchedule");
const Activity = require("../Models/Activity");

class FacilityCS {


    static async getFacilityActivities(request, reply) {
        try {
            let schedules = await FacilitySchedule.findAll({
                // include: {model: Activity},
                where: {FacilityId: request.params["id"]}
            });
            return schedules
        } catch (err) {
            reply.send(GeneralUtils.getErrorMsg(err, "Internal Server Error", 500))
        }
    }

    static async getFacilitySchedule(request, reply) {
        try {
            return await FacilitySchedule.findAll({where: {facility: request.params["id"]}});
        } catch (err) {
            reply.send(GeneralUtils.getErrorMsg(err, "Internal Server Error", 500))
        }
    }
}

module.exports = FacilityCS