const jwt = require("express-jwt");

const authJwt = (secret) => {
  return jwt({
    secret,
    algorithms: ["HS256"],
  });
};

module.exports = authJwt;
