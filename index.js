const path = require('path')  
const express = require('express')  
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()

app.use('/', express.static(path.join(__dirname, 'react/build')));
app.use(bodyParser.urlencoded({ extended: true }));           // to support URL-encoded bodies
app.use(bodyParser.json());                                   // to support JSON-encoded bodies

// Additional middleware which will set headers that we need on each request.
app.use((req, res, next) => {
  // Set permissive CORS header - this allows this server to be used only as
  // an API server in conjunction with something like webpack-dev-server.
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Disable caching so we'll always get the latest.
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.get('/api/sample', (req, res) => {
  res.send('sample return');
});

// app.listen(3000);
app.listen(3000, '127.0.0.1');
console.log('listening on 3000');
