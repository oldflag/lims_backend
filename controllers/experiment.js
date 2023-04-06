import { createExperiment, getExperiments, updateExperiment, deleteExperiment, getExperiment } from '../lib/experiments.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { id, name, short_description, long_description, exp_date, priority, status, metadata, projectId } = req.body;
  const results = await createExperiment({ id, name, short_description, long_description, exp_date, priority,status, metadata, projectId})
  const editedResults = await getExperiment(results.id)
  res.status(200).json({ success: true, result: editedResults });
});

export const getAll = tryCatch(async (req, res) => {
  let results = await getExperiments()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateExperiment(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteExperiment(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
