const express = require("express");
const router = express.Router();
const Todo = require("../models/ToDos");
const Project = require("../models/Projects");

/*
  REMEMBER all prefixes are "/project"
*/

// Route = /project...
// CRUD PROJECT Routes

/* GET all projects */
router.get("/", (req, res, next) => {
  Project.find().then(projects => {
    const completedProjects = projects.map(({ToDos}) => {
      ToDos.filter(todo => todo.deleted === false)
    })

    res.json(completedProjects);
  });
});

// Get a project
router.get("/:id", (req, res) => {
  Project.findById(req.params.id).then(project => res.json(project));
});

// Post new project
router.post("/", (req, res) => {
  const todos = req.body
  const {Name, Description, } = req.body;
  const newProject = new Project({
    title: Name,
    description: Description,
    toDo: [
      "Creating project", false, false, 0
    ]
  })
  console.log(newProject)
  // Project
  //   .create(req.body)
  //   .then(project => res.json(project));
});

// TodoRoutes

// New Todo for Project
router.post("/:projId/todo", (req, res) => {
  let oldProj = Project.findById(req.params.projId);
  oldProj.todos.push(req.body);
  Project.findByIdAndUpdate(req.params.id, oldProj);
  res.json(oldProj);
});

router.delete("/:projId/:todoId", (req, res) => {
  let 
});
module.exports = router;
