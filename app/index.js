const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(8000, function () {
  console.log('Listening to Port 8000');
});