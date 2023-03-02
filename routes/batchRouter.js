import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne } from '../controllers/batch.js';

const batchRouter = Router();
batchRouter.post('/register', createOne);
batchRouter.get('/', getAll);
batchRouter.patch('/updateStatus/:Id', updateStatus);
batchRouter.delete('/:Id', deleteOne);
export default batchRouter;