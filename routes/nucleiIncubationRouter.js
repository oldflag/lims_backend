import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne } from '../controllers/nucleiIncubation.js';

const nucleiIncubationRouter = Router();
nucleiIncubationRouter.post('/register', createOne);
nucleiIncubationRouter.get('/', getAll);
nucleiIncubationRouter.patch('/updateStatus/:Id', updateStatus);
nucleiIncubationRouter.delete('/:Id', deleteOne);
export default nucleiIncubationRouter;