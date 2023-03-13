import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne } from '../controllers/lysis.js';

const lysisRouter = Router();
lysisRouter.post('/register', createOne);
lysisRouter.get('/', getAll);
lysisRouter.patch('/updateStatus/:Id', updateStatus);
lysisRouter.delete('/:Id', deleteOne);
export default lysisRouter;