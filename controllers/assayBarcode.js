// import { createAssayBarcode, getAssayBarcodes, updateAssayBarcode, deleteAssayBarcode } from '../lib/assayBarcodes.js';
import { getAssayBarcodes } from '../lib/assayBarcodes.js';

import tryCatch from './utils/tryCatch.js';

// export const createOne = tryCatch(async (req, res) => {
//   const { id, name, type, priority, status, metadata} = req.body;
//   const results = await createAssayBarcode({ id, name, type, priority, status, metadata})
//   res.status(200).json({ success: true, result: results });
// });

export const getAll = tryCatch(async (req, res) => {
  const results = await getAssayBarcodes()
  res.status(200).json({ success: true, result: results });
});

// export const updateStatus = tryCatch(async (req, res) => {
//   await updateAssayBarcode(req.params.Id, req.body);
//   res.status(200).json({ success: true, result: { id: req.params.Id } });
// });

// export const deleteOne = tryCatch(async (req, res) => {
//   await deleteAssayBarcode(req.params.Id);
//   res.status(200).json({ success: true, result: { id: req.params.Id } });
// });
