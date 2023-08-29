import { createBatch, getBatchs, updateBatch, deleteBatch, getBatch } from '../lib/batchs.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { id, name, type, priority, subProtocol, status, metadata, quoteId, createdAt} = req.body;
  const results = await createBatch({ id, name, type, priority, subProtocol, status, metadata, quoteId, createdAt})
  const editedResults = await getBatch(results.id)
  res.status(200).json({ success: true, result: editedResults });
});

export const getAll = tryCatch(async (req, res) => {
  const results = await getBatchs()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  let result = await updateBatch(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteBatch(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
