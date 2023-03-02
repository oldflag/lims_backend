import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne } from '../controllers/assay.js';

const assayRouter = Router();
assayRouter.post('/register', createOne);
assayRouter.get('/', getAll);
assayRouter.patch('/updateStatus/:Id', updateStatus);
assayRouter.delete('/:Id', deleteOne);
export default assayRouter;