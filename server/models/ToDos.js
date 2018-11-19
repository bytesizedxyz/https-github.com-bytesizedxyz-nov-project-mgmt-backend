const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
  description: String,
  completed: Boolean,
  deleted: Boolean
});

module.exports = { toDoSchema };
