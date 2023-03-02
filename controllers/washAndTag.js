import { createWashAndTag, getWashAndTags, updateWashAndTag, deleteWashAndTag, getWashAndTag } from '../lib/washAndTags.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { id, reagentInfo, operator, qcClumps, status, memo,metadata,completedAt,assayId } = req.body;
  const results = await createWashAndTag({ id, reagentInfo, operator, qcClumps,status, memo,metadata,completedAt,assayId})
  const editedResults = await getWashAndTag(results.id)
  res.status(200).json({ success: true, result: editedResults });
});

export const getAll = tryCatch(async (req, res) => {
  let results = await getWashAndTags()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateWashAndTag(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteWashAndTag(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
