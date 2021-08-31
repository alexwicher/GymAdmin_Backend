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
        PlanSchedule.belongsTo(require('./Plan.js'))
        PlanSchedule.belongsTo(require('./Activity.js'))
        PlanSchedule.belongsTo(require('./Facility.js'))
    }

}

module.exports = PlanSchedule