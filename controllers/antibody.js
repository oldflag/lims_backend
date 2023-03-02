import { createAntibody, getAntibodies, updateAntibody, deleteAntibody } from '../lib/antibodies.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { id, name, vendor, cat, target, lot, status, metadata} = req.body;
  const results = await createAntibody({ id, name, vendor, cat, target, lot, status, metadata})
  res.status(200).json({ success: true, result: results });
});

export const getAll = tryCatch(async (req, res) => {
  const results = await getAntibodies()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateAntibody(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteAntibody(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
