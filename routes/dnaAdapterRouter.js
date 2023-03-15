import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne } from '../controllers/dnaAdapter.js';

const dnaAdapterRouter = Router();
dnaAdapterRouter.post('/register', createOne);
dnaAdapterRouter.get('/', getAll);
dnaAdapterRouter.patch('/updateStatus/:Id', updateStatus);
dnaAdapterRouter.delete('/:Id', deleteOne);
export default dnaAdapterRouter;