import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne } from '../controllers/seqRun.js';

const seqRunRouter = Router();
seqRunRouter.post('/register', createOne);
seqRunRouter.get('/', getAll);
seqRunRouter.patch('/updateStatus/:Id', updateStatus);
seqRunRouter.delete('/:Id', deleteOne);
export default seqRunRouter;