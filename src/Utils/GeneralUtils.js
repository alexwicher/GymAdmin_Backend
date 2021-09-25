const config = require("../../appConfig");

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

    static getSuccessMsg(message, payload, statusCode) {
        let err = config.schemas.errorMsg
        err["payload"] = payload
        err["message"] = message
        err["statusCode"] = statusCode
        return err
    }
}

module.exports = GeneralUtils