import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne } from '../controllers/experiment.js';

const experimentRouter = Router();
experimentRouter.post('/register', createOne);
experimentRouter.get('/', getAll);
experimentRouter.patch('/updateStatus/:Id', updateStatus);
experimentRouter.delete('/:Id', deleteOne);
export default experimentRouter;