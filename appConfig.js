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
config.server.secretKey = "95f266dd74ce2a3b55af2cec3062678d"
config.server.jwtExpire = (1000 * 60 * 60) * 1.5 //(hour in ms)*hours

config.server.authWhitelist = ['/user/signup']

module.exports = config;

