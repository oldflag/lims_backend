import { Router } from 'express';
import { getAll} from '../controllers/assayBarcode.js';

const assayBarcodeRouter = Router();
// assayBarcodeRouter.post('/register', createOne);
assayBarcodeRouter.get('/', getAll);
// assayBarcodeRouter.patch('/updateStatus/:Id', updateStatus);
// assayBarcodeRouter.delete('/:Id', deleteOne);
export default assayBarcodeRouter;