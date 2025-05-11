const jwt = require("jsonwebtoken");

module.exports = (payload, expiresIn) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn,
  });

  return token;
};
