import Task from '../models/task.js';
import Board from '../models/board.js';

export const createTask = async (req, res) => {
  try {
    const task = new Task({
      title: req.body.title,
      description: req.body.description,
      dueDate: req.body.dueDate,
      board: req.body.board
    });
    await task.save();
    const board = await Board.findById(req.body.board);
    board.tasks.push(task);
    await board.save();
    res.status(201).send({ success: true, message: 'Task created successfully', task });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send();
    }
    const board = await Board.findById(task.board);
    board.tasks.pull(task);
    await board.save();
    res.send({ success: true, message: 'Task deleted successfully', task });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!task) {
      return res.status(404).send();
    }
    res.send({ success: true, message: 'Task updated successfully', task });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const listTasks = async (req, res) => {
  try {
    const board = await Board.findById(req.params.boardId).populate('tasks');
    if (!board) {
      return res.status(404).send();
    }
    res.send({ success: true, message: 'Tasks fetched successfully', tasks: board.tasks });
  } catch (error) {
    res.status(500).send(error);
  }
};
