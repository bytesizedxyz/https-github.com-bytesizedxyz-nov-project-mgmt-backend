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
  const allProj = Project.find().then(projects => {
    const completedProjects = projects.map(({toDo}) => {
      toDo.filter(todo => todo.deleted === false)
    })
  });
  res.json(allProj);
});

// Get a project
router.get("/:id", (req, res) => {
  Project.findById(req.params.id).then(project => res.json(project));
});

// Post new project
router.post("/", (req, res) => {
  const { Name, Description, } = req.body;
  const todos = req.body.ToDos
  const newProject = new Project({
    title: Name,
    description: Description,
    toDo: todos
  })
  newProject.save((err) => {
    if (err) return handleError(err);
    // saved!
  });
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

  let updatedProj = Project.findById(req.params.projId);
  let { toDo } = updatedProj;
  const { projId, todoId } = req.params;
  
  toDo.splice(toDo.findIndex((todo) => todo._id === req.params.todoId), 1);

  updatedProj.toDo = toDo;

  Project.findByIdAndUpdate(projId, updatedProj);

  res.json(updatedProj)
});
module.exports = router;
