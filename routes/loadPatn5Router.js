import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne } from '../controllers/loadPatn5.js';

const loadPatn5Router = Router();
loadPatn5Router.post('/register', createOne);
loadPatn5Router.get('/', getAll);
loadPatn5Router.patch('/updateStatus/:Id', updateStatus);
loadPatn5Router.delete('/:Id', deleteOne);
export default loadPatn5Router;