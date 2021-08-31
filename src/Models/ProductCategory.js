const {Model, DataTypes, Deferrable} = require("sequelize");

class ProductCategory extends Model {

    static initModel(sequelize) {
        ProductCategory.init({
            productCategory: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            productCategorySlug: {
                type: DataTypes.STRING,
                unique: true
            },

        }, {sequelize})
    }

    static associateModel() {
        ProductCategory.hasMany(require('./Inventory.js'))
    }

}

module.exports = ProductCategory