import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne } from '../controllers/rnaAdapter.js';

const rnaAdapterRouter = Router();
rnaAdapterRouter.post('/register', createOne);
rnaAdapterRouter.get('/', getAll);
rnaAdapterRouter.patch('/updateStatus/:Id', updateStatus);
rnaAdapterRouter.delete('/:Id', deleteOne);
export default rnaAdapterRouter;