const {Model, DataTypes, Deferrable} = require("sequelize");


class Client extends Model {

    static initModel(sequelize) {
        Client.init({}, {sequelize})
    }

    static associateModel() {
        Client.belongsTo(require('./User.js'))
        Client.belongsTo(require('./Membership.js'))
    }

}

module.exports = Client