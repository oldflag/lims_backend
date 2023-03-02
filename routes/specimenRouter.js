import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne } from '../controllers/specimen.js';

const specimenRouter = Router();
specimenRouter.post('/register', createOne);
specimenRouter.get('/', getAll);
specimenRouter.patch('/updateStatus/:Id', updateStatus);
specimenRouter.delete('/:Id', deleteOne);
export default specimenRouter;