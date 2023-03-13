import { createRnaAdapter, getRnaAdapters, updateRnaAdapter, deleteRnaAdapter, getRnaAdapter } from '../lib/rnaAdapters.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { id, reagentInfo, memo, operator, status, rnaLibraryId} = req.body;
  const results = await createRnaAdapter({ id, reagentInfo, memo, operator, status, rnaLibraryId })
  const editedResults = await getRnaAdapter(results.id)
  res.status(200).json({ success: true, result: editedResults });
});

export const getAll = tryCatch(async (req, res) => {
  let results = await getRnaAdapters()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateRnaAdapter(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteRnaAdapter(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
