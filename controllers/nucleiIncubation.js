import { createNucleiIncubation, getNucleiIncubations, updateNucleiIncubation, deleteNucleiIncubation, getNucleiIncubation } from '../lib/nucleiIncubations.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { id, reagentInfo, operator, status, memo,metadata,completedAt,assayId } = req.body;
  const results = await createNucleiIncubation({ id, reagentInfo, operator, status, memo,metadata,completedAt,assayId})
  const editedResults = await getNucleiIncubation(results.id)
  res.status(200).json({ success: true, result: editedResults });
});

export const getAll = tryCatch(async (req, res) => {
  let results = await getNucleiIncubations()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateNucleiIncubation(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteNucleiIncubation(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
