const express = require("express");
const { createuser, loginuser } = require("../controllers/user.controller");
const passport = require("../config/passport"); // Adjust the path to your passport configuration
const googleAuth = require("../controllers/auth.controller");


const userRoute = express.Router();

userRoute.post("/signup", createuser);
userRoute.post("/login", loginuser);

userRoute.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

userRoute.get(
  "/auth/google/callback",
  passport.authenticate("google", { session: false }), // no express-session if using JWT
  googleAuth
);

module.exports = userRoute;
