const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const authentication = require("../server/authentication");
const TokenVerify = require("../server/middleware/TokenVerify");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
//var request = require("request");

//var router = express.Router();
const path = require("path");

// For deploying, so client code is served by our backend server.
//app.use(express.static(path.join(__dirname, 'client/build')));

function getTodos(req, res) {
  console.log("getTodos user id:" + req.userId);

  const MongoClient = require("mongodb").MongoClient;

  MongoClient.connect(
    "mongodb://backend:h3lloyou@ds125272.mlab.com:25272/handly",
    function(err, client) {
      if (err) throw err;

      const db = client.db("handly");
      const collection = db.collection("todos");

      const textSearch = req.query.search;

      let cursor;
      if (textSearch) {
        cursor = collection.find({
          $text: { $search: textSearch }
        });
      } else {
        cursor = collection.find();
      }

      cursor.toArray(function(err, result) {
        if (err) throw err;

        console.log(result);
        res.send(result);
      });
    }
  );
}

function getTodoDetails(req, res) {
  const MongoClient = require("mongodb").MongoClient;
  const ObjectId = require("mongodb").ObjectId;

  MongoClient.connect(
    "mongodb://backend:h3lloyou@ds125272.mlab.com:25272/handly",
    function(err, client) {
      if (err) throw err;

      const db = client.db("handly");

      const todoId = req.params.id;

      db.collection("todos").findOne({ _id: ObjectId(todoId) }, function(
        err,
        result
      ) {
        if (err) throw err;

        // console.log(result);

        const todoToReturn = {
          title: result.title,
          place: result.place,
          notes: result.notes
        };

        res.send(todoToReturn);
      });
    }
  );
}

function addTodo(req, res) {
  const MongoClient = require("mongodb").MongoClient;

  MongoClient.connect(
    "mongodb://backend:h3lloyou@ds125272.mlab.com:25272/handly",
    function(err, client) {
      if (err) throw err;

      const db = client.db("handly");

      console.log(req.body);

      const todo = req.body;

      db.collection("todos").save(todo, function(err, result) {
        if (err) throw err;

        // console.log(result);
        res.send(result);
      });
    }
  );
}

function deleteTodo(req, res) {
  const MongoClient = require("mongodb").MongoClient;
  const ObjectId = require("mongodb").ObjectId;

  MongoClient.connect(
    "mongodb://backend:h3lloyou@ds125272.mlab.com:25272/handly",
    function(err, client) {
      if (err) throw err;

      const db = client.db("handly");

      const todoId = req.params.id;

      console.log("DELETING todo " + todoId);

      if (!todoId || todoId < 0) {
        res.status(404).send();
        return;
      }

      db.collection("todos").findOneAndDelete(
        { _id: ObjectId(todoId) },
        function(err, result) {
          if (err) throw err;

          //   console.log(result);
          res.send(result);
        }
      );
    }
  );
}

function updateTodo(req, res) {
  const MongoClient = require("mongodb").MongoClient;
  const ObjectId = require("mongodb").ObjectId;

  MongoClient.connect(
    "mongodb://backend:h3lloyou@ds125272.mlab.com:25272/handly",
    function(err, client) {
      if (err) throw err;

      const db = client.db("handly");

      const todoId = req.params.id;
      const todoDataFromRequest = req.body;

      if (
        !todoDataFromRequest ||
        !todoDataFromRequest.title ||
        !todoDataFromRequest.place ||
        !todoDataFromRequest.notes
      ) {
        res.status(400).send();
        return;
      }

      const mongoUpdate = {
        $set: {
          title: todoDataFromRequest.title,
          place: todoDataFromRequest.place,
          notes: todoDataFromRequest.notes
        }
      };

      console.log("UPDATING todo " + todoId);
      console.log(mongoUpdate);

      if (!todoId || todoId < 0) {
        res.status(404).send();
        return;
      }

      db.collection("todos").findOneAndUpdate(
        { _id: ObjectId(todoId) },
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

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/todos", TokenVerify, (req, res) => getTodos(req, res));
app.post("/todos", (req, res) => addTodo(req, res));
app.get("/todos/:id", TokenVerify, (req, res) => getTodoDetails(req, res));
app.put("/todos/:id", TokenVerify, (req, res) => updateTodo(req, res));
app.delete("/todos/:id", TokenVerify, (req, res) => deleteTodo(req, res));

app.get("/users", TokenVerify, (req, res) => authentication.getUsers(req, res));
app.post("/users", TokenVerify, (req, res) =>
  authentication.addNewUser(req, res)
);
app.get("/users/:id", TokenVerify, (req, res) =>
  authentication.getUserDetails(req, res)
); // get profile
app.put("/users/:id", TokenVerify, (req, res) =>
  authentication.updateUser(req, res)
);
app.delete("/users/:id", TokenVerify, (req, res) =>
  authentication.deleteUser(req, res)
);

app.post("/me/token", (req, res) => authentication.userLogin(req, res));

//app.use(express.static(path.join(__dirname, '../client/build')));

// app.use("/", function(req, res) {
//   var url = "http://localhost:3000" + req.url;
//   req.pipe(request(url)).pipe(res);
// });

app.listen(3001, () => console.log("Example app listening on port 3001!"));
