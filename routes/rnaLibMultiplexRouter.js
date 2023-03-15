import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne } from '../controllers/rnaLibMultiplex.js';

const rnaLibMultiplexRouter = Router();
rnaLibMultiplexRouter.post('/register', createOne);
rnaLibMultiplexRouter.get('/', getAll);
rnaLibMultiplexRouter.patch('/updateStatus/:Id', updateStatus);
rnaLibMultiplexRouter.delete('/:Id', deleteOne);
export default rnaLibMultiplexRouter;