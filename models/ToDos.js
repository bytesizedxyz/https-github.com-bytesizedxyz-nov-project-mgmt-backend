const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  description: { type: String },
  completed: { type: Boolean },
  id: { type: Number }
});

module.exports = mongoose.model("Project", projectSchema);
