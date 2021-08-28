const {Model, DataTypes, Deferrable} = require("sequelize");

class Role extends Model {

    static initRole(sequelize) {
        Role.init({
            roleName: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            roleNameSlug: {
                type: DataTypes.STRING,
                unique: true
            },
            dateCreated: {
                type: DataTypes.DATE,
                defaultValue: new Date()
            }

        }, {sequelize,tableName: 'role'})
    }

}

module.exports = Role