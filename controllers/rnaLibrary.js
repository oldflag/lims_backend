import { createRnaLibrary, getRnaLibrarys, updateRnaLibrary, deleteRnaLibrary, getRnaLibrary } from '../lib/rnaLibrarys.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { id, name, memo, operator, status, lysisId } = req.body;
  const results = await createRnaLibrary({ id, name, memo, operator, status, lysisId })
  // console.log(results)
  const editedResults = await getRnaLibrary(results.id)
  // console.log(editedResults)
  res.status(200).json({ success: true, result: editedResults });
});

export const getAll = tryCatch(async (req, res) => {
  let results = await getRnaLibrarys()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateRnaLibrary(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteRnaLibrary(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
