import { createRnaRT, getRnaRTs, updateRnaRT, deleteRnaRT, getRnaRT } from '../lib/rnaRTs.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { id, reagentInfo, operator, qcClumps, status, memo,metadata,completedAt,assayId } = req.body;
  const results = await createRnaRT({ id, reagentInfo, operator, qcClumps,status, memo,metadata,completedAt,assayId})
  const editedResults = await getRnaRT(results.id)
  res.status(200).json({ success: true, result: editedResults });
});

export const getAll = tryCatch(async (req, res) => {
  let results = await getRnaRTs()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateRnaRT(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteRnaRT(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
