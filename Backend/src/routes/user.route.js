const express = require('express');
const { createuser, loginuser } = require('../controllers/user.controller');

const userRoute = express.Router();

userRoute.post("/signup", createuser)
userRoute.post("/login", loginuser)

module.exports = userRoute;