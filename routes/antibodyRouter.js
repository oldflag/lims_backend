import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne } from '../controllers/antibody.js';

const antibodyRouter = Router();
antibodyRouter.post('/register', createOne);
antibodyRouter.get('/', getAll);
antibodyRouter.patch('/updateStatus/:Id', updateStatus);
antibodyRouter.delete('/:Id', deleteOne);
export default antibodyRouter;