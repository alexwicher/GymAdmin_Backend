const Sequelize = require("sequelize");
let DBConfig = require('../appConfig.js').databaseConnection

class MySequelize {

    sequelize = new Sequelize(DBConfig.database, DBConfig.username, DBConfig.password, {
        host: DBConfig.host,
        dialect: DBConfig.dialect,
        pool: {
            max: DBConfig.maxConnections,
            min: 0,
            idle: DBConfig.timeout
        }
    });

    initAndAssociateModels() {
        let normalizedPath = require("path").join(__dirname, "Models"); // Loads and inits all models
        let models = require("fs").readdirSync(normalizedPath)

        models.forEach(file => {
            const model = require("./Models/" + file);
            model.initModel(this.sequelize)
        });

        models.forEach(file => {
            const model = require("./Models/" + file);
            model.associateModel()
        })
    }

    async initSequelize() {
        this.sequelize.authenticate().then(() => {
            console.log("MySequelize successful authentication to BD!");
        }).catch((err) => {
            console.log(err);
        });

        this.initAndAssociateModels()

        await this.sequelize.sync();
        console.log("All models were synchronized successfully.");
    }

}

module.exports = new MySequelize()
