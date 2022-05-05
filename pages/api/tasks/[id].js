import Task from "../../../models/task";
import mongoose from "mongoose";

export default async function handler({ query: { id } }, res) {
  const task = await Task.find({
    _id: new mongoose.Types.ObjectId(id),
  });
  if (task.length > 0) {
    res.status(200).json(task[0]);
  } else {
    res
      .status(404)
      .json({ message: `Article with the id of ${id} is not found` });
  }
}
