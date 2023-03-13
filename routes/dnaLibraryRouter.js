import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne } from '../controllers/dnaLibrary.js';

const dnaLibraryRouter = Router();
dnaLibraryRouter.post('/register', createOne);
dnaLibraryRouter.get('/', getAll);
dnaLibraryRouter.patch('/updateStatus/:Id', updateStatus);
dnaLibraryRouter.delete('/:Id', deleteOne);
export default dnaLibraryRouter;