const mongoose = require("mongoose");
const { toDos } = require("./ToDos");

const projectSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  toDo: { type: toDos},
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Project", projectSchema);
