const {Model, DataTypes, Deferrable} = require("sequelize");

class Facility extends Model {

    static initModel(sequelize) {
        Facility.init({
            email: {
                type: DataTypes.STRING,
                unique: true
            },
            facilityName: {
                type: DataTypes.STRING,
                unique: true, allowNull: false
            },
            facilityNameSlug: {
                type: DataTypes.STRING, allowNull: false
            },
            phone: {
                type: DataTypes.STRING
            },
            dateCreated: {
                type: DataTypes.DATE,
                defaultValue: new Date()
            }

        }, {sequelize})
    }

    static associateModel() {
        Facility.hasOne(require('./FacilitySchedule.ts'))
        Facility.hasMany(require('./PlanSchedule.ts'))
        Facility.hasMany(require('./Inventory.ts'))
        Facility.belongsToMany(require('./Employee.ts'), {through: 'EmployeeFacility'});
    }

}

module.exports = Facility