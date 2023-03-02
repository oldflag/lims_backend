import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne } from '../controllers/sample.js';

const sampleRouter = Router();
sampleRouter.post('/register', createOne);
sampleRouter.get('/', getAll);
sampleRouter.patch('/updateStatus/:Id', updateStatus);
sampleRouter.delete('/:Id', deleteOne);
export default sampleRouter;