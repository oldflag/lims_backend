import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne, createMany } from '../controllers/quote.js';

const quoteRouter = Router();
quoteRouter.post('/register', createOne);
quoteRouter.post('/registerMany', createMany);
quoteRouter.get('/', getAll);
quoteRouter.patch('/updateStatus/:Id', updateStatus);
quoteRouter.delete('/:Id', deleteOne);
export default quoteRouter;