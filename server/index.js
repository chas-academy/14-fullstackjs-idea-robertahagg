const express = require("express");
const app = express();
var bodyParser = require("body-parser");
//var request = require("request");

//var router = express.Router();
const path = require("path");

// For deploying, so client code is served by our backend server.
//app.use(express.static(path.join(__dirname, 'client/build')));

function getTodos(res) {
  var MongoClient = require("mongodb").MongoClient;

  MongoClient.connect(
    "mongodb://backend:h3lloyou@ds125272.mlab.com:25272/handly",
    function(err, client) {
      if (err) throw err;

      var db = client.db("handly");

      db.collection("todos")
        .find()
        .toArray(function(err, result) {
          if (err) throw err;

          console.log(result);
          res.send(result);
        });
    }
  );
}

function addTodo(req, res) {
  var MongoClient = require("mongodb").MongoClient;

  MongoClient.connect(
    "mongodb://backend:h3lloyou@ds125272.mlab.com:25272/handly",
    function(err, client) {
      if (err) throw err;

      var db = client.db("handly");

      console.log(req.body);

      const todo = req.body;

      db.collection("todos").save(todo, function(err, result) {
        if (err) throw err;

        console.log(result);
        res.send(result);
      });
    }
  );
}

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

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/todos", (req, res) => getTodos(res));
app.post("/todos", (req, res) => addTodo(req, res));
app.get("/todos/:id", (req, res) => res.send("Hello World!"));
app.put("/todos/:id", (req, res) => res.send("Hello World!"));
app.delete("/todos/:id", (req, res) => res.send("Hello World!"));

app.get("/users", (req, res) => res.send("Hello World!"));
app.post("/users", (req, res) => addNewUser(req, res));
app.get("/users/:id", (req, res) => res.send("Hello World!"));
app.put("/users/:id", (req, res) => res.send("Hello World!"));
app.delete("/users/:id", (req, res) => res.send("Hello World!"));

//app.use(express.static(path.join(__dirname, '../client/build')));

// app.use("/", function(req, res) {
//   var url = "http://localhost:3000" + req.url;
//   req.pipe(request(url)).pipe(res);
// });

app.listen(3001, () => console.log("Example app listening on port 3001!"));
