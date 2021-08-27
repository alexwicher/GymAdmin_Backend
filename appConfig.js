const config = {}

config.databaseConnection = {};
config.server = {};

config.databaseConnection.host = "localhost"
config.databaseConnection.username = "admin"
config.databaseConnection.password = "41263038"
config.databaseConnection.database = "gym"
config.databaseConnection.maxConnections = 10
config.databaseConnection.dialect = "postgres"
config.databaseConnection.timeout = 10000

config.server.port = 3000;

module.exports = config;