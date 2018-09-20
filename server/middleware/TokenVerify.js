const jwt = require("jsonwebtoken");
const config = require("../config");

function tokenVerify(req, res, next) {
  // var token = req.headers["x-access-token"];

  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send({
      authenticated: false,
      message: "Unauthorized. No token provided."
    });
  }

  jwt.verify(token, config.secret, function(error, decodedToken) {
    if (error) {
      res.status(401).send({
        authenticated: false,
        message: "An error occured when trying to authenticate token"
      });
    }

    // This request is good, and the token is verified, pass this on to the other routes
    req.userId = decodedToken.id;
    next();
  });
}

module.exports = tokenVerify;
