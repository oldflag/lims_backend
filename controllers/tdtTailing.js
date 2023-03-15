import { createTdtTailing, getTdtTailings, updateTdtTailing, deleteTdtTailing, getTdtTailing } from '../lib/tdtTailings.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { id, memo, operator, status, lysisId } = req.body;
  const results = await createTdtTailing({ id, memo, operator, status, lysisId })
  const editedResults = await getTdtTailing(results.id)
  res.status(200).json({ success: true, result: editedResults });
});

export const getAll = tryCatch(async (req, res) => {
  let results = await getTdtTailings()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateTdtTailing(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteTdtTailing(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
