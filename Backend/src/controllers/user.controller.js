const User = require("../models/User");
const bcrypt = require("bcrypt");
const customStatus = require("../utils/customStatus");
const toMs = require("../utils/toMs");
const jwt = require("../utils/jwt");


async function createuser(req, res) {
  const payload = req.body;

  try {
    const user = await User.create(payload);
    customStatus(res, 201, "User Created", user);
  } catch (err) {
    customStatus(res, 500, "Internal Server Error", err.message);
  }
}

async function loginuser(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return customStatus(res, 404, "User Not Found");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return customStatus(res, 401, "Invalid Credentials");
    }

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
  } catch (err) {
    customStatus(res, 500, "Internal Server Error", err.message);
  }
}


module.exports = { createuser, loginuser };
