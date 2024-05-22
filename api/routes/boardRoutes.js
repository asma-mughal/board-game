import express from 'express';
import { createBoard, deleteBoard, listBoards } from '../controllers/boardController.js';

const router = express.Router();

router.post('/create', createBoard);
router.delete('/:id', deleteBoard);
router.get('/list', listBoards);

export default router;
