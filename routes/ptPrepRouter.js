import { Router } from 'express';
import { createOne,getAll, updateStatus, deleteOne } from '../controllers/ptPrep.js';

const ptPrepRouter = Router();
ptPrepRouter.post('/register', createOne);
ptPrepRouter.get('/', getAll);
ptPrepRouter.patch('/updateStatus/:Id', updateStatus);
ptPrepRouter.delete('/:Id', deleteOne);
export default ptPrepRouter;