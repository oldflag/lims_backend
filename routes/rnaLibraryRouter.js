import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne } from '../controllers/rnaLibrary.js';

const rnaLibraryRouter = Router();
rnaLibraryRouter.post('/register', createOne);
rnaLibraryRouter.get('/', getAll);
rnaLibraryRouter.patch('/updateStatus/:Id', updateStatus);
rnaLibraryRouter.delete('/:Id', deleteOne);
export default rnaLibraryRouter;