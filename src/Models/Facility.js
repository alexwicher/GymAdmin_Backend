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
        Facility.hasOne(require('./FacilitySchedule.js'))
        Facility.hasMany(require('./PlanSchedule.js'))
        Facility.hasMany(require('./Inventory.js'))
        Facility.belongsToMany(require('./Employee.js'), {through: 'EmployeeFacility'});
    }

}

module.exports = Facility