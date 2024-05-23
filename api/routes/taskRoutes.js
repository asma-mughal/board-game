import express from 'express';
import { createTask, deleteTask, updateTask, listTasks, listTasksForuser } from '../controllers/taskController.js';

const router = express.Router();

router.post('/create', createTask);
router.delete('/:id', deleteTask);
router.put('/update/:id', updateTask);
router.get('/:boardId/tasks', listTasks);
router.get('/:userId/listTask', listTasksForuser);

export default router;
