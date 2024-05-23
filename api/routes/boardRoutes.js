import express from 'express';
import { createBoard, deleteBoard, listBoards, listBoardsForUser } from '../controllers/boardController.js';

const router = express.Router();

router.post('/create', createBoard);
router.delete('/:id', deleteBoard);
router.get('/list', listBoards);
router.get('/list/:userId', listBoardsForUser);


export default router;
