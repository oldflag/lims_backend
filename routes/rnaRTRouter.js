import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne } from '../controllers/rnaRT.js';

const rnaRTRouter = Router();
rnaRTRouter.post('/register', createOne);
rnaRTRouter.get('/', getAll);
rnaRTRouter.patch('/updateStatus/:Id', updateStatus);
rnaRTRouter.delete('/:Id', deleteOne);
export default rnaRTRouter;