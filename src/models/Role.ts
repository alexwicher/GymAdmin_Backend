const {Model, DataTypes, Deferrable} = require("sequelize");

class Role extends Model {
}

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
        type: DataTypes.DATE
    }

});

module.exports = Role