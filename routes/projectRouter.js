import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne, updateRelatedSpecimens, updateRelatedExperiments } from '../controllers/project.js';

const projectRouter = Router();
projectRouter.post('/register', createOne);
projectRouter.get('/', getAll);
projectRouter.patch('/updateStatus/:Id', updateStatus);
projectRouter.delete('/:Id', deleteOne);
projectRouter.patch('/updateRelatedSpecimens/:Id', updateRelatedSpecimens)
projectRouter.patch('/updateRelatedExperiments/:Id', updateRelatedExperiments)
export default projectRouter;