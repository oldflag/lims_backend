import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne } from '../controllers/tdtTailing.js';

const tdtTailingRouter = Router();
tdtTailingRouter.post('/register', createOne);
tdtTailingRouter.get('/', getAll);
tdtTailingRouter.patch('/updateStatus/:Id', updateStatus);
tdtTailingRouter.delete('/:Id', deleteOne);
export default tdtTailingRouter;