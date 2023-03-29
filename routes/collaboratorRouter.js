import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne, createMany } from '../controllers/collaborator.js';

const collaboratorRouter = Router();
collaboratorRouter.post('/register', createOne);
collaboratorRouter.post('/registerMany', createMany);
collaboratorRouter.get('/', getAll);
collaboratorRouter.patch('/updateStatus/:Id', updateStatus);
collaboratorRouter.delete('/:Id', deleteOne);
export default collaboratorRouter;