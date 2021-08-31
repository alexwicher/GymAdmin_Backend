const {Model, DataTypes, Deferrable} = require("sequelize");

class Employee extends Model {

    static initModel(sequelize) {
        Employee.init({}, {sequelize})
    }

    static associateModel() {
        Employee.belongsTo(require('./Role.ts'))
        Employee.belongsTo(require('./User.ts'))
        Employee.belongsToMany(require('./Facility.ts'), {through: 'EmployeeFacility'});
    }

}

module.exports = Employee