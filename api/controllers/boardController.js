import Board from '../models/board.js';
import Task from '../models/task.js';

export const createBoard = async (req, res) => {
  try {
    const board = new Board({ name: req.body.name });
    await board.save();
    res.status(201).send(board);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteBoard = async (req, res) => {
  try {
    const board = await Board.findByIdAndDelete(req.params.id);
    if (!board) {
      return res.status(404).send();
    }
    await Task.deleteMany({ board: board._id });
    res.send(board);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const listTasks = async (req, res) => {
  try {
    const board = await Board.findById(req.params.boardId).populate('tasks');
    if (!board) {
      return res.status(404).send();
    }
    res.send(board.tasks);
  } catch (error) {
    res.status(500).send(error);
  }
};