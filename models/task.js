import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  assignment: {
    type: String,
    required: true,
  },
  lesson: {
    type: String,
    required: true,
  },
  handOut: {
    type: Date,
    required: true,
  },
  turnIn: {
    type: Date,
    required: true,
  },
  due: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.models.Task || mongoose.model("Task", taskSchema);
