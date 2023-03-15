import { createSplitPool, getSplitPools, updateSplitPool, deleteSplitPool, getSplitPool } from '../lib/splitPools.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { id, reagentInfo, spLayout, qcClumps, status, memo, operator, batchId } = req.body;
  const results = await createSplitPool({ id, reagentInfo, spLayout, qcClumps, status, memo, operator, batchId})
  const editedResults = await getSplitPool(results.id)
  res.status(200).json({ success: true, result: editedResults });
});

export const getAll = tryCatch(async (req, res) => {
  let results = await getSplitPools()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateSplitPool(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteSplitPool(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
