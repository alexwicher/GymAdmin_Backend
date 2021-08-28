const {Model, DataTypes, Deferrable} = require("sequelize");

class Role extends Model {

    static initRole(conn) {
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

        }, {conn,tableName: 'role'})
    }

}

module.exports = Role