const mongoose = require("mongoose");
const { toDoSchema } = require("./ToDos");

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  toDo: [toDoSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Project", projectSchema);
