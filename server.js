#!/usr/bin/node
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/ping', function (req, res) {
  console.log(req)
  return res.send({response: "pong"});
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(process.env.PORT || 8080);
