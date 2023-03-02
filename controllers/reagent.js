import { createReagent, getReagents, updateReagent, deleteReagent } from '../lib/reagents.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { id, name, generic_name, part, lot, expiration_date, status, metadata} = req.body;
  const results = await createReagent({ id, name, generic_name, part, lot, expiration_date, status, metadata})
  res.status(200).json({ success: true, result: results });
});

export const getAll = tryCatch(async (req, res) => {
  const results = await getReagents()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateReagent(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteReagent(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
