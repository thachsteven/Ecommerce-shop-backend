const jwt = require("express-jwt");

const authJwt = (secret) => {
  const api = process.env.API_URL

  return jwt({
    secret,
    algorithms: ["HS256"],
    isRevoked: isRevoked
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

async function isRevoked(req, payload, done) {
  if(!payload.isAdmin){
    done(null, true)
  }
  done()
}

module.exports = authJwt;
