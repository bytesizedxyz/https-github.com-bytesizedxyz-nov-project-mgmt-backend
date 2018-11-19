const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
  description: {
    type: String
  },
  completed: {
    type: Boolean
  },
  id: {
    type: Number
  }
});

module.exports = mongoose.model("ToDos", toDoSchema);