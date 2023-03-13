import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne } from '../controllers/doubleSizeSelect.js';

const doubleSizeSelectRouter = Router();
doubleSizeSelectRouter.post('/register', createOne);
doubleSizeSelectRouter.get('/', getAll);
doubleSizeSelectRouter.patch('/updateStatus/:Id', updateStatus);
doubleSizeSelectRouter.delete('/:Id', deleteOne);
export default doubleSizeSelectRouter;