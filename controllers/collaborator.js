import { createCollaborator, getCollaborators, updateCollaborator, deleteCollaborator } from '../lib/collaborators.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { id, name, contactName, contactEmail, contactPhone, note, url, active} = req.body;
  const results = await createCollaborator({ id, name, contactName, contactEmail, contactPhone, note, url, active})
  res.status(200).json({ success: true, result: results });
});

export const getAll = tryCatch(async (req, res) => {
  const results = await getCollaborators()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateCollaborator(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteCollaborator(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
