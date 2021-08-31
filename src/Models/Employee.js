const {Model, DataTypes, Deferrable} = require("sequelize");

class Employee extends Model {

    static initModel(sequelize) {
        Employee.init({}, {sequelize})
    }

    static associateModel() {
        Employee.belongsTo(require('./Role.js'))
        Employee.belongsTo(require('./User.js'))
        Employee.belongsToMany(require('./Facility.js'), {through: 'EmployeeFacility'});
    }

}

module.exports = Employee