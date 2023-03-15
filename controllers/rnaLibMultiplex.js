import { createRnaLibMultiplex, getRnaLibMultiplexs, updateRnaLibMultiplex, deleteRnaLibMultiplex, getRnaLibMultiplex } from '../lib/rnaLibMultiplexs.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { id, reagentInfo, i7PrimerId, i5PrimerId, beadRatio, memo, operator, status, rnaLibraryId} = req.body;
  const results = await createRnaLibMultiplex({ id, reagentInfo, i7PrimerId, i5PrimerId, beadRatio, memo, operator, status, rnaLibraryId })
  const editedResults = await getRnaLibMultiplex(results.id)
  res.status(200).json({ success: true, result: editedResults });
});

export const getAll = tryCatch(async (req, res) => {
  let results = await getRnaLibMultiplexs()
  // console.log(results)
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateRnaLibMultiplex(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteRnaLibMultiplex(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
