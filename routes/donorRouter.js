import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne } from '../controllers/donor.js';

const donorRouter = Router();
donorRouter.post('/register', createOne);
donorRouter.get('/', getAll);
donorRouter.patch('/updateStatus/:Id', updateStatus);
donorRouter.delete('/:Id', deleteOne);
export default donorRouter;