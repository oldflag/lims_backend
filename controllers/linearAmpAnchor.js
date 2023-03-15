import { createLinearAmpAnchor, getLinearAmpAnchors, updateLinearAmpAnchor, deleteLinearAmpAnchor, getLinearAmpAnchor } from '../lib/linearAmpAnchors.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { id, memo, operator, status, lysisId } = req.body;
  const results = await createLinearAmpAnchor({ id, memo, operator, status, lysisId })
  const editedResults = await getLinearAmpAnchor(results.id)
  res.status(200).json({ success: true, result: editedResults });
});

export const getAll = tryCatch(async (req, res) => {
  let results = await getLinearAmpAnchors()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateLinearAmpAnchor(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteLinearAmpAnchor(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
