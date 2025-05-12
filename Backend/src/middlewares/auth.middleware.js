const customStatus = require("../utils/customStatus");
const jwt = require("jsonwebtoken");

async function auth (req, res, next) {

    const token = req.headers.authorization 
    if(!token || !token.startsWith("Bearer ")) {
        return customStatus(res, 401, "Unauthorized");
    }

    try {
        const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch (err) {
        if (err.name === "TokenExpiredError") {
            return customStatus(res, 401, "Token Expired");
        } else if (err.name === "JsonWebTokenError") {
            return customStatus(res, 401, "Invalid Token");
        } else {
            return customStatus(res, 500, "Internal Server Error", err.message);
        }
    }
}

module.exports = auth;