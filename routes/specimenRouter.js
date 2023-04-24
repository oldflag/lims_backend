import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne, updateRelatedSamples } from '../controllers/specimen.js';

const specimenRouter = Router();
specimenRouter.post('/register', createOne);
specimenRouter.get('/', getAll);
specimenRouter.patch('/updateStatus/:Id', updateStatus);
specimenRouter.delete('/:Id', deleteOne);
specimenRouter.patch('/updateRelatedSamples/:Id', updateRelatedSamples)
export default specimenRouter;