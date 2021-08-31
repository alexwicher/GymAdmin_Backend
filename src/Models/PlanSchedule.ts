const {Model, DataTypes, Deferrable} = require("sequelize");

class PlanSchedule extends Model {

    static initModel(sequelize) {
        PlanSchedule.init({
            hourFrom: {
                type: DataTypes.DATE,
                allowNull: false
            },
            hourTo: {
                type: DataTypes.DATE,
                allowNull: false
            }

        }, {sequelize})
    }

    static associateModel() {
        PlanSchedule.belongsTo(require('./Plan.ts'))
        PlanSchedule.belongsTo(require('./Activity.ts'))
        PlanSchedule.belongsTo(require('./Facility.ts'))
    }

}

module.exports = PlanSchedule