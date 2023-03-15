import { createLysis, getLysiss, updateLysis, deleteLysis, getLysis } from '../lib/lysiss.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { id, name, quantity, quantityUnit, memo, operator, status, batchId, splitPoolId } = req.body;
  const results = await createLysis({ id, name, quantity, quantityUnit, memo, operator, status,batchId, splitPoolId })
  const editedResults = await getLysis(results.id)
  res.status(200).json({ success: true, result: editedResults });
});

export const getAll = tryCatch(async (req, res) => {
  let results = await getLysiss()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateLysis(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteLysis(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
