import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne } from '../controllers/project.js';

const projectRouter = Router();
projectRouter.post('/register', createOne);
projectRouter.get('/', getAll);
projectRouter.patch('/updateStatus/:Id', updateStatus);
projectRouter.delete('/:Id', deleteOne);
export default projectRouter;