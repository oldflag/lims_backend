import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne } from '../controllers/dnaSplitEnzyme.js';

const dnaSplitEnzymeRouter = Router();
dnaSplitEnzymeRouter.post('/register', createOne);
dnaSplitEnzymeRouter.get('/', getAll);
dnaSplitEnzymeRouter.patch('/updateStatus/:Id', updateStatus);
dnaSplitEnzymeRouter.delete('/:Id', deleteOne);
export default dnaSplitEnzymeRouter;