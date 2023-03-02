import { createPtPrep, getPtPreps, updatePtPrep, deletePtPrep, getPtPrep } from '../lib/ptPreps.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { id, operator, status, memo, metadata , assayId, nucleiIncubationId, washAndTagId, rnaRTId } = req.body;
  const results = await createPtPrep({ id, operator, status, memo, metadata , assayId, nucleiIncubationId, washAndTagId, rnaRTId})
  const editedResults = await getPtPrep(results.id)
  res.status(200).json({ success: true, result: editedResults });
});

export const getAll = tryCatch(async (req, res) => {
  let results = await getPtPreps()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updatePtPrep(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deletePtPrep(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
