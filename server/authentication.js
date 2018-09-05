var jwt = require("jsonwebtoken");
var config = require("../server/config");

function addNewUser(req, res) {
  var MongoClient = require("mongodb").MongoClient;

  MongoClient.connect(
    "mongodb://backend:h3lloyou@ds125272.mlab.com:25272/handly",
    function(err, client) {
      if (err) throw err;

      var db = client.db("handly");

      console.log(req.body);

      const newUser = req.body;

      db.collection("users").save(newUser, function(err, result) {
        if (err) throw err;

        console.log(result);
        res.send(result);
      });
    }
  );
}

function userLogin(req, res) {
  var MongoClient = require("mongodb").MongoClient;

  MongoClient.connect(
    "mongodb://backend:h3lloyou@ds125272.mlab.com:25272/handly",
    function(err, client) {
      if (err)
        return res
          .status(500)
          .send("An error occured while trying process login.");

      const userFromRequest = req.body;

      console.log("Hejjjjjj ***************************************");
      console.log(req.body);

      let mongoQuery = { email: userFromRequest.email };

      var db = client.db("handly");

      db.collection("users").findOne(mongoQuery, function(err, userFromDb) {
        if (err) throw err;

        console.log(userFromDb);
        const token = createTokenForUser(userFromDb._id);

        res
          .cookie("token", token, { maxAge: 86400 })
          .status(200)
          .send();
      });

      return;

      if (!user)
        return res
          .status(404)
          .send("No registered user found with that email.");
    }
  );
}

function createTokenForUser(userId) {
  return jwt.sign({ id: userId }, config.secret, {
    expiresIn: 86400 // valid for 24 hours
  });
}

function verifyToken(req, res) {
  db.collection("users").findById(req.userId, { password: 0 }, function(
    error,
    user
  ) {
    if (error) {
      res.status(500).send("An error occured while trying to find the user.");
    }

    if (!user) {
      res.status(404).status("User not found");
    }

    res.status(200).send({
      authenticated: true,
      user: user
    });
  });
}

module.exports = {
  addNewUser: addNewUser,
  userLogin: userLogin,
  verifyToken: verifyToken
};
