import { createDnaAdapter, getDnaAdapters, updateDnaAdapter, deleteDnaAdapter, getDnaAdapter } from '../lib/dnaAdapters.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { id, reagentInfo, memo, operator, status, dnaLibraryId} = req.body;
  const results = await createDnaAdapter({ id, reagentInfo, memo, operator, status, dnaLibraryId })
  const editedResults = await getDnaAdapter(results.id)
  res.status(200).json({ success: true, result: editedResults });
});

export const getAll = tryCatch(async (req, res) => {
  let results = await getDnaAdapters()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateDnaAdapter(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteDnaAdapter(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
