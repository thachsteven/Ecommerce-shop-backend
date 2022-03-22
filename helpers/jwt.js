const jwt = require("express-jwt");

const authJwt = (secret) => {
  const api = process.env.API_URL

  return jwt({
    secret,
    algorithms: ["HS256"],
  }).unless({
    path: [
      //Tất cả sau * sẽ được chấp thuận
      {url: /\/api\/v1\/products(.*)/, methods: ['GET', 'OPTIONS']},
      {url: /\/api\/v1\/categories(.*)/, methods: ['GET', 'OPTIONS']},
      `${api}/users/login`,
      `${api}/users/register`,
    ]
  });
};

module.exports = authJwt;
