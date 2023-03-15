import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne } from '../controllers/rnaSplitEnzyme.js';

const rnaSplitEnzymeRouter = Router();
rnaSplitEnzymeRouter.post('/register', createOne);
rnaSplitEnzymeRouter.get('/', getAll);
rnaSplitEnzymeRouter.patch('/updateStatus/:Id', updateStatus);
rnaSplitEnzymeRouter.delete('/:Id', deleteOne);
export default rnaSplitEnzymeRouter;