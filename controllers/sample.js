import { createSample, getSamples, updateSample, deleteSample, getSample } from '../lib/samples.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { id, name, extract_date, extract_method,nuclei_count, nuclei_count_result, status, metadata ,specimenId } = req.body;
  const results = await createSample({ id, name, extract_date, extract_method, nuclei_count, nuclei_count_result, status, metadata ,specimenId})
  const editedResults = await getSample(results.id)
  res.status(200).json({ success: true, result: editedResults });
});

export const getAll = tryCatch(async (req, res) => {
  let results = await getSamples()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateSample(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteSample(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
