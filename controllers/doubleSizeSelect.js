import { createDoubleSizeSelect, getDoubleSizeSelects, updateDoubleSizeSelect, deleteDoubleSizeSelect, getDoubleSizeSelect } from '../lib/doubleSizeSelects.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { id, memo, operator, status, lysisId } = req.body;
  const results = await createDoubleSizeSelect({ id, memo, operator, status, lysisId })
  const editedResults = await getDoubleSizeSelect(results.id)
  res.status(200).json({ success: true, result: editedResults });
});

export const getAll = tryCatch(async (req, res) => {
  let results = await getDoubleSizeSelects()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateDoubleSizeSelect(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteDoubleSizeSelect(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
