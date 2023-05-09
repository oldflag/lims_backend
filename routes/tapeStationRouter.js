import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne } from '../controllers/tapeStation.js';

const tapeStationRouter = Router();
tapeStationRouter.post('/register', createOne);
tapeStationRouter.get('/', getAll);
tapeStationRouter.patch('/updateStatus/:Id', updateStatus);
tapeStationRouter.delete('/:Id', deleteOne);
export default tapeStationRouter;