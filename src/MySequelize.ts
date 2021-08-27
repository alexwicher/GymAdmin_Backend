const Sequelize = require("sequelize");

let DBConfig = require('../appConfig.js').databaseConnection

class MySequelize {

    static sequelize = new Sequelize(DBConfig.database, DBConfig.username, DBConfig.password, {
        host: DBConfig.host,
        dialect: DBConfig.dialect,
        pool: {
            max: DBConfig.maxConnections,
            min: 0,
            idle: DBConfig.timeout
        }
    });

    static initSequelize() {
        MySequelize.sequelize.authenticate().then(() => {
            console.log("MySequelize successful authentication to BD!");
        }).catch((err) => {
            console.log(err);
        });
    }

}

module.exports = MySequelize
