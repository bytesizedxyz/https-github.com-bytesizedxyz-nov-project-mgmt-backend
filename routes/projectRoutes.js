const express = require('express');
const router = express.Router();
const Todo = require('../models/ToDos');
const Project = require("../models/Projects");

/*
  REMEMBER all prefixes are "/project"
*/


// Route = /project...
// CRUD PROJECT Routes

/* GET all projects */
router.get('/', (req, res, next) => {
  Todo
    .find()
    .then(todos => res.json(todos))
});

// Get a project
router.get("/:id", (req, res) => {
  Project
    .findById()
})

// Post new project
router.post("/", (req, res) => {
  Project
    .create()
    .then()
});


// TodoRoutes

router.post("/")
module.exports = router;
