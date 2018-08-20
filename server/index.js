const express = require('express')
const app = express()
const path = require('path');

// For deploying, so client code is served by our backend server.
//app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(3001, () => console.log('Example app listening on port 3001!'))

//module.exports = app;
// start this with: node index.js