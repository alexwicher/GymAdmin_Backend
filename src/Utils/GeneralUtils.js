const config = require("../appConfig");

class GeneralUtils {

    static getJWT(req) {
        return req.headers.authorization.replace("Bearer ", "")
    }

    static getErrorMsg(message, error, statusCode) {
        let err = config.schemas.errorMsg
        err["message"] = message
        err["error"] = error
        err["statusCode"] = statusCode
        return err
    }
}

module.exports = GeneralUtils