import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne, createMany, importOne } from '../controllers/quote.js';

const quoteRouter = Router();
quoteRouter.post('/register', createOne);
quoteRouter.post('/registerMany', createMany);
quoteRouter.post('/import', importOne);
quoteRouter.get('/', getAll);
quoteRouter.patch('/updateStatus/:Id', updateStatus);
quoteRouter.delete('/:Id', deleteOne);
export default quoteRouter;