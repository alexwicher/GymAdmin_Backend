const {Model, DataTypes, Deferrable} = require("sequelize");


class Client extends Model {

    static initModel(sequelize) {
        Client.init({
            // membershipId: {
            //     type: DataTypes.INTEGER,
            //     references: {
            //         model: 'membership',
            //         key: 'id'
            //     }
            // },
            // userId: {
            //     type: DataTypes.INTEGER,
            //     references: {
            //         model: 'user',
            //         key: 'id'
            //     }
            // },
        }, {sequelize})
    }

    static associateModel() {
        Client.belongsTo(require('./User.ts'))
        Client.belongsTo(require('./Membership.ts'))
    }

}

module.exports = Client