const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
  description: String,
  completed: Boolean,
  deleted: Boolean,
  id: Number
});

module.exports = { toDoSchema };
