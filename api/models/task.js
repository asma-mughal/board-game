import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  dueDate: Date,
  board: { type: mongoose.Schema.Types.ObjectId, ref: 'Board' },
  createdBy: { type: String, required: true }, // Change createdBy to String type
});

const Task = mongoose.model('Task', TaskSchema);
export default Task;
