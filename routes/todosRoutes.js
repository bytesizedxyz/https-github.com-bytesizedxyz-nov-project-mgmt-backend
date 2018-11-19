const express = require('express');
const router = express.Router();
const Todo = require('../models/todo')

/* GET home page. */
router.get('/', function(req, res, next) {
  Todo
    .find()
    .then(todos => res.json(todos))
});

module.exports = router;
