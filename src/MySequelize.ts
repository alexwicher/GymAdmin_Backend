const Sequelize = require("sequelize");
const Role = require("./Models/Role.ts")
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

     async initSequelize() {
        this.sequelize.authenticate().then(() => {
            console.log("MySequelize successful authentication to BD!");
        }).catch((err) => {
            console.log(err);
        });

        Role.initRole(this.sequelize)

        await this.sequelize.sync();
        console.log("All models were synchronized successfully.");
    }

}

module.exports = new MySequelize()
