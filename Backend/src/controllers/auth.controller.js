const jwt = require("../utils/jwt");
const customStatus = require("../utils/customStatus");
const toMs = require("../utils/toMs");

async function googleAuth (req,res){

    const user = req.user; // The user object is populated by the Google strategy
    const accessToken = jwt({id : user._id}, process.env.ACCESS_TOKEN);
    const refreshToken = jwt({id : user._id}, process.env.REFRESH_TOKEN);

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        sameSite: "none",
        secure: process.env.NODE_ENV === "production",
        maxAge: toMs(process.env.REFRESH_TOKEN),
      });

    customStatus(res, 200, "Login Successful", {
        accessToken,
        user,
      });
    

}


module.exports = googleAuth