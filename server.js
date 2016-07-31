'use strict';

const router = require('./route/router');
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const serverPort = 3000;

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: 'true'}));
app.use(morgan('dev'));
app.use('/api', router);

app.use((err, req, res, next) => {
  if (err.status !== 400) {
    return next();
  }
  res.status(400).send(err.message || 'Invalid request, please try again.');
  next();
});

module.exports = exports = app.listen(serverPort, () => console.log('Server running at http://localhost:' + serverPort));
