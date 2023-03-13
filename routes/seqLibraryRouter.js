import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne } from '../controllers/seqLibrary.js';

const seqLibraryRouter = Router();
seqLibraryRouter.post('/register', createOne);
seqLibraryRouter.get('/', getAll);
seqLibraryRouter.patch('/updateStatus/:Id', updateStatus);
seqLibraryRouter.delete('/:Id', deleteOne);
export default seqLibraryRouter;