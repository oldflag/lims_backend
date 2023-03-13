import { createDnaSplitEnzyme, getDnaSplitEnzymes, updateDnaSplitEnzyme, deleteDnaSplitEnzyme, getDnaSplitEnzyme } from '../lib/dnaSplitEnzymes.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { id, reagentInfo, beadRatio, memo, operator, status, dnaLibraryId} = req.body;
  const results = await createDnaSplitEnzyme({ id, reagentInfo, beadRatio, memo, operator, status, dnaLibraryId })
  const editedResults = await getDnaSplitEnzyme(results.id)
  res.status(200).json({ success: true, result: editedResults });
});

export const getAll = tryCatch(async (req, res) => {
  let results = await getDnaSplitEnzymes()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateDnaSplitEnzyme(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteDnaSplitEnzyme(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
