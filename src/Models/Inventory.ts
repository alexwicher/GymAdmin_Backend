const {Model, DataTypes, Deferrable} = require("sequelize");

class Inventory extends Model {

    static initModel(sequelize) {
        Inventory.init({
            productName: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            productNameSlug: {
                type: DataTypes.STRING,
                unique: true
            },
            units: {
                type: DataTypes.INTEGER,
                defaultValue: 1
            },
            pricePerUnit: {
                type: DataTypes.DECIMAL(9, 2),
                allowNull: false
            }

        }, {sequelize})
    }

    static associateModel() {
        Inventory.belongsTo(require('./ProductCategory.ts'))
        Inventory.belongsTo(require('./Facility.ts'))
    }

}

module.exports = Inventory