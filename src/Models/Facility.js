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
                type: DataTypes.STRING
            },
            phone: {
                type: DataTypes.STRING
            }

        }, {sequelize})
    }

    static associateModel() {
        Facility.hasMany(require('./FacilitySchedule.js'))
        Facility.hasMany(require('./PlanSchedule.js'))
        Facility.hasMany(require('./Inventory.js'))
        Facility.belongsToMany(require('./Employee.js'), {through: 'EmployeeFacility'});
    }

}

module.exports = Facility