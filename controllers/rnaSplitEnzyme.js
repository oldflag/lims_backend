import { createRnaSplitEnzyme, getRnaSplitEnzymes, updateRnaSplitEnzyme, deleteRnaSplitEnzyme, getRnaSplitEnzyme } from '../lib/rnaSplitEnzymes.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { id, reagentInfo, beadRatio, memo, operator, status, rnaLibraryId} = req.body;
  const results = await createRnaSplitEnzyme({ id, reagentInfo, beadRatio, memo, operator, status, rnaLibraryId })
  const editedResults = await getRnaSplitEnzyme(results.id)
  res.status(200).json({ success: true, result: editedResults });
});

export const getAll = tryCatch(async (req, res) => {
  let results = await getRnaSplitEnzymes()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateRnaSplitEnzyme(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteRnaSplitEnzyme(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
