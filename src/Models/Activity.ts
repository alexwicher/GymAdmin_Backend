const {Model, DataTypes, Deferrable} = require("sequelize");

class Activity extends Model {

    static initModel(sequelize) {
        Activity.init({
            activityName: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            activityNameSlug: {
                type: DataTypes.STRING,
                unique: true
            },
            strictTimeDefault: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },

        }, {sequelize})
    }

    static associateModel() {
        Activity.hasMany(require('./FacilitySchedule.ts'))
        Activity.hasMany(require('./PlanSchedule.ts'))
    }

}

module.exports = Activity