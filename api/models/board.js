import mongoose from 'mongoose';

const BoardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdBy: { type: String, required: true }, // Change createdBy to String type
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
});

const Board = mongoose.model('Board', BoardSchema);
export default Board;