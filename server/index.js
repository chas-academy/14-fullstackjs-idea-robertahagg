const express = require('express')
const app = express()
const path = require('path');

// For deploying, so client code is served by our backend server.
//app.use(express.static(path.join(__dirname, 'client/build')));

function getTodos(res) {
    var MongoClient = require('mongodb').MongoClient

    MongoClient.connect('mongodb://backend:h3lloyou@ds125272.mlab.com:25272/handly', function (err, client) {
      if (err) throw err
    
      var db = client.db('handly')
      
      db.collection('todos').find().toArray(function (err, result) {
        if (err) throw err
    
        console.log(result)
        res.send(result);
      })
    })
}

app.get('/todos', (req, res) => getTodos(res))
app.post('/todos', (req, res) => res.send('Hello World!'))
app.get('/todos/:id', (req, res) => res.send('Hello World!'))
app.put('/todos/:id', (req, res) => res.send('Hello World!'))
app.delete('/todos/:id', (req, res) => res.send('Hello World!'))

app.listen(3001, () => console.log('Example app listening on port 3001!'))

//module.exports = app;
// start this with: node index.js