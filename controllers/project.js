import { createProject, getProjects, updateProject, deleteProject, getProject } from '../lib/projects.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { id, name, description, status, metadata, collaboratorId } = req.body;
  const results = await createProject({ id, name, description, status, metadata, collaboratorId})
  const editedResults = await getProject(results.id)
  res.status(200).json({ success: true, result: editedResults });
});

export const getAll = tryCatch(async (req, res) => {
  let results = await getProjects()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateProject(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteProject(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
