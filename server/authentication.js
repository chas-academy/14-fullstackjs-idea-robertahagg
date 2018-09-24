const jwt = require("jsonwebtoken");
const config = require("../server/config");
const bcrypt = require("bcrypt");

function addNewUser(req, res) {
  const MongoClient = require("mongodb").MongoClient;

  MongoClient.connect(
    "mongodb://backend:h3lloyou@ds125272.mlab.com:25272/handly",
    function(err, client) {
      if (err) throw err;

      const db = client.db("handly");

      console.log(req.body);

      const userFromRequest = req.body;
      const passwordHash = bcrypt.hashSync(userFromRequest.password, 10);

      const newUserForDb = {
        email: userFromRequest.email,
        username: userFromRequest.username,
        passwordHash: passwordHash
      };

      db.collection("users").save(newUserForDb, function(err, result) {
        if (err) throw err;

        console.log(result);
        res.send(result);
      });
    }
  );
}
function getUsers(req, res) {
  console.log("getUsers user id:" + req.userId);
  const MongoClient = require("mongodb").MongoClient;

  MongoClient.connect(
    "mongodb://backend:h3lloyou@ds125272.mlab.com:25272/handly",
    function(err, client) {
      if (err) throw err;

      const db = client.db("handly");

      db.collection("users")
        .find()
        .toArray(function(err, result) {
          if (err) throw err;

          console.log(result);
          res.send(result);
        });
    }
  );
}

function getUserDetails(req, res) {
  const MongoClient = require("mongodb").MongoClient;
  const ObjectId = require("mongodb").ObjectId;

  MongoClient.connect(
    "mongodb://backend:h3lloyou@ds125272.mlab.com:25272/handly",
    function(err, client) {
      if (err) throw err;

      const db = client.db("handly");

      userId = req.params.id;

      db.collection("users").findOne({ _id: ObjectId(userId) }, function(
        err,
        result
      ) {
        if (err) throw err;

        console.log(result);

        const userToReturn = {
          username: result.username,
          email: result.email
        };

        res.send(userToReturn);
      });
    }
  );
}

function deleteUser(req, res) {
  const MongoClient = require("mongodb").MongoClient;
  const ObjectId = require("mongodb").ObjectId;

  MongoClient.connect(
    "mongodb://backend:h3lloyou@ds125272.mlab.com:25272/handly",
    function(err, client) {
      if (err) throw err;

      const db = client.db("handly");

      const userId = req.params.id;

      console.log("DELETING user " + userId);

      if (!userId || userId < 0) {
        res.status(404).send();
        return;
      }

      db.collection("users").findOneAndDelete(
        { _id: ObjectId(userId) },
        function(err, result) {
          if (err) throw err;

          //   console.log(result);
          res.send(result);
        }
      );
    }
  );
}

function updateUser(req, res) {
  const MongoClient = require("mongodb").MongoClient;
  const ObjectId = require("mongodb").ObjectId;

  MongoClient.connect(
    "mongodb://backend:h3lloyou@ds125272.mlab.com:25272/handly",
    function(err, client) {
      if (err) throw err;

      const db = client.db("handly");

      const userId = req.params.id;
      const userDataFromRequest = req.body;

      if (
        !userDataFromRequest ||
        !userDataFromRequest.username ||
        !userDataFromRequest.email
      ) {
        res.status(400).send();
        return;
      }

      const mongoUpdate = {
        $set: {
          username: userDataFromRequest.username,
          email: userDataFromRequest.email
        }
      };

      console.log("UPDATING user " + userId);
      console.log(mongoUpdate);

      if (!userId || userId < 0) {
        res.status(404).send();
        return;
      }

      db.collection("users").findOneAndUpdate(
        { _id: ObjectId(userId) },
        mongoUpdate,
        function(err, result) {
          if (err) throw err;

          //   console.log(result);
          res.send(result);
        }
      );
    }
  );
}

function userLogin(req, res) {
  const MongoClient = require("mongodb").MongoClient;

  MongoClient.connect(
    "mongodb://backend:h3lloyou@ds125272.mlab.com:25272/handly",
    function(err, client) {
      if (err)
        return res
          .status(500)
          .send("An error occured while trying process login.");

      let userFromRequest = req.body;

      console.log("Hejjjjjj ***************************************");
      console.log(req.body);

      const mongoQuery = { email: userFromRequest.email };

      const db = client.db("handly");

      db.collection("users").findOne(mongoQuery, function(err, userFromDb) {
        if (err) throw err;

        if (!verifyPassword(req, res, userFromDb.passwordHash)) {
          return;
        }

        console.log(userFromDb);
        const token = createTokenForUser(userFromDb._id);

        res
          .cookie("token", token, { maxAge: 86400000 })
          .status(200)
          .send();
      });

      //   if (!user)
      //     return res
      //       .status(404)
      //       .send("No registered user found with that email.");
    }
  );
}

function verifyPassword(req, res, passwordHash) {
  const isValidPassword = bcrypt.compareSync(req.body.password, passwordHash);

  if (!isValidPassword) {
    res
      .clearCookie("token")
      .status(401)
      .send("Incorrect password.");
  }

  return isValidPassword;
}

function createTokenForUser(userId) {
  return jwt.sign({ id: userId }, config.secret, {
    expiresIn: 86400 // valid for 24 hours
  });
}

module.exports = {
  addNewUser: addNewUser,
  userLogin: userLogin,
  getUsers: getUsers,
  getUserDetails: getUserDetails,
  deleteUser: deleteUser,
  updateUser: updateUser
};
