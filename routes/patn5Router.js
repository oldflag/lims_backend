import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne } from '../controllers/patn5.js';

const patn5Router = Router();
patn5Router.post('/register', createOne);
patn5Router.get('/', getAll);
patn5Router.patch('/updateStatus/:Id', updateStatus);
patn5Router.delete('/:Id', deleteOne);
export default patn5Router;