import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne } from '../controllers/preAmp.js';

const preAmpRouter = Router();
preAmpRouter.post('/register', createOne);
preAmpRouter.get('/', getAll);
preAmpRouter.patch('/updateStatus/:Id', updateStatus);
preAmpRouter.delete('/:Id', deleteOne);
export default preAmpRouter;