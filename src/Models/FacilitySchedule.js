const {Model, DataTypes, Deferrable} = require("sequelize");

class FacilitySchedule extends Model {

    static initModel(sequelize) {
        FacilitySchedule.init({
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
        FacilitySchedule.belongsTo(require('./Facility.js'))
        FacilitySchedule.belongsTo(require('./Activity.js'))
    }

}

module.exports = FacilitySchedule