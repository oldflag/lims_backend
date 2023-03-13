import { Router } from 'express';
import { getAll} from '../controllers/i5Primer.js';

const i5PrimerRouter = Router();
// i5PrimerRouter.post('/register', createOne);
i5PrimerRouter.get('/', getAll);
// i5PrimerRouter.patch('/updateStatus/:Id', updateStatus);
// i5PrimerRouter.delete('/:Id', deleteOne);
export default i5PrimerRouter;