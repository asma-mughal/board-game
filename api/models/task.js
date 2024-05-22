import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  dueDate: Date,
  board: { type: mongoose.Schema.Types.ObjectId, ref: 'Board' }
});

const Task = mongoose.model('Task', TaskSchema);
export default Task;
