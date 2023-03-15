import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne } from '../controllers/dnaLibMultiplex.js';

const dnaLibMultiplexRouter = Router();
dnaLibMultiplexRouter.post('/register', createOne);
dnaLibMultiplexRouter.get('/', getAll);
dnaLibMultiplexRouter.patch('/updateStatus/:Id', updateStatus);
dnaLibMultiplexRouter.delete('/:Id', deleteOne);
export default dnaLibMultiplexRouter;