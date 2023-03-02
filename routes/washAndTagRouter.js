import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne } from '../controllers/washAndTag.js';

const washAndTagRouter = Router();
washAndTagRouter.post('/register', createOne);
washAndTagRouter.get('/', getAll);
washAndTagRouter.patch('/updateStatus/:Id', updateStatus);
washAndTagRouter.delete('/:Id', deleteOne);
export default washAndTagRouter;