import { Router } from 'express';
import { getAll} from '../controllers/i7Primer.js';

const i7PrimerRouter = Router();
// i7PrimerRouter.post('/register', createOne);
i7PrimerRouter.get('/', getAll);
// i7PrimerRouter.patch('/updateStatus/:Id', updateStatus);
// i7PrimerRouter.delete('/:Id', deleteOne);
export default i7PrimerRouter;