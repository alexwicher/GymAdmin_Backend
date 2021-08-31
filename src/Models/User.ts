const {Model, DataTypes, Deferrable} = require("sequelize");

class User extends Model {

    static initModel(sequelize) {
        User.init({
            userName: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            userNameSlug: {
                type: DataTypes.STRING,
                unique: true
            },
            fullName: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            fullNameSlug: {
                type: DataTypes.STRING,
                unique: true
            },
            DNI: {
                type: DataTypes.STRING,
                unique: true
            },
            email: {
                type: DataTypes.STRING,
                unique: true
            },
            passwordHash: {
                type: DataTypes.STRING,
                unique: true
            },
            dateCreated: {
                type: DataTypes.DATE,
                defaultValue: new Date()
            }

        }, {sequelize})
    }

    static associateModel() {
        User.hasOne(require('./Client.ts'))
        User.hasOne(require('./Employee.ts'))
    }

}

module.exports = User