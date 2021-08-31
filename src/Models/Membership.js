const {Model, DataTypes, Deferrable} = require("sequelize");

class Membership extends Model {

    static initModel(sequelize) {
        Membership.init({
            membershipName: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            membershipNameSlug: {
                type: DataTypes.STRING,
                unique: true
            },
            discount: {
                type: DataTypes.DECIMAL(9, 2)
            },
            dateExpires: {
                type: DataTypes.DATE,
                allowNull: false
            },
            dateCreated: {
                type: DataTypes.DATE,
                defaultValue: new Date()
            },

        }, {sequelize})
    }

    static associateModel() {
        Membership.hasOne(require('./Client.js'))
        Membership.belongsTo(require('./Plan.js'))
    }
}


module.exports = Membership