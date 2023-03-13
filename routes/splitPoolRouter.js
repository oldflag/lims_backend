import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne } from '../controllers/splitPool.js';

const splitPoolRouter = Router();
splitPoolRouter.post('/register', createOne);
splitPoolRouter.get('/', getAll);
splitPoolRouter.patch('/updateStatus/:Id', updateStatus);
splitPoolRouter.delete('/:Id', deleteOne);
export default splitPoolRouter;