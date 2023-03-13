import { createDnaLibMultiplex, getDnaLibMultiplexs, updateDnaLibMultiplex, deleteDnaLibMultiplex, getDnaLibMultiplex } from '../lib/dnaLibMultiplexs.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { id, reagentInfo, i7PrimerId, i5PrimerId, beadRatio, memo, operator, status, dnaLibraryId} = req.body;
  const results = await createDnaLibMultiplex({ id, reagentInfo, i7PrimerId, i5PrimerId, beadRatio, memo, operator, status, dnaLibraryId })
  const editedResults = await getDnaLibMultiplex(results.id)
  res.status(200).json({ success: true, result: editedResults });
});

export const getAll = tryCatch(async (req, res) => {
  let results = await getDnaLibMultiplexs()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateDnaLibMultiplex(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteDnaLibMultiplex(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
