import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne } from '../controllers/linearAmpAnchor.js';

const linearAmpAnchorRouter = Router();
linearAmpAnchorRouter.post('/register', createOne);
linearAmpAnchorRouter.get('/', getAll);
linearAmpAnchorRouter.patch('/updateStatus/:Id', updateStatus);
linearAmpAnchorRouter.delete('/:Id', deleteOne);
export default linearAmpAnchorRouter;