'use strict';

const express = require('express');
const router = express.Router();

router.post('/directory/', (req, res) => {
  //Your code does stuff here.
  res.json({message: 'Succesfull POST request.'});
});

router.delete('/directory/:id', (req, res) => {
  //Your code does stuff here.
  res.json({message: 'Succesfull DELETE request'});
});

router.get('/directory/:id', (req, res) => {
  //Your code does stuff here.
  res.json({message: 'Succesfull GET request.'});
});

router.get('/directory/', (req, res) => {
  //Your code does stuff here.
  res.json({message: 'Succesfull GET request.'});
});

router.get('/', (req, res) => {
  res.json({message: 'Succesfull GET request to API\'s home directory.'});
});

router.get('*', (req, res, next) => {
  let handledError = new Error();
  handledError.status = 400;
  next(handledError);
});

module.exports = router;
