const {Model, DataTypes, Deferrable} = require("sequelize");

class Plan extends Model {

    static initModel(sequelize) {
        Plan.init({
            planName: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            planNameSlug: {
                type: DataTypes.STRING,
                unique: true
            },
            dateCreated: {
                type: DataTypes.DATE,
                defaultValue: new Date()
            },
            costPerMonth: {
                type: DataTypes.DECIMAL(9, 2),
                allowNull: false
            }

        }, {sequelize})
    }

    static associateModel() {
        Plan.hasMany(require('./Membership.ts'))
        Plan.hasMany(require('./PlanSchedule.ts'))
    }

}

module.exports = Plan