import { createDonor, getDonors, updateDonor, deleteDonor, getDonor } from '../lib/donors.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { id, name, age, sex, ancestry, species, status, metadata, collaboratorId } = req.body;
  const results = await createDonor({ id, name, age, sex, ancestry, species, status, metadata, collaboratorId})
  const editedResults = await getDonor(results.id)
  res.status(200).json({ success: true, result: editedResults });
});

export const getAll = tryCatch(async (req, res) => {
  let results = await getDonors()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateDonor(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteDonor(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
