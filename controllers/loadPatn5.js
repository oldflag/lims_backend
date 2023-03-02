import { createLoadPatn5, getLoadPatn5s, updateLoadPatn5, deleteLoadPatn5, getLoadPatn5 } from '../lib/loadPatn5s.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { id, loadName, tubeNum, patn5Id, dnaInfo, status, expiration_date, memo } = req.body;
  const results = await createLoadPatn5({ id, loadName, tubeNum, patn5Id, dnaInfo, status, expiration_date, memo })
  const editedResults = await getLoadPatn5(results.id)
  res.status(200).json({ success: true, result: editedResults });
});

export const getAll = tryCatch(async (req, res) => {
  const results = await getLoadPatn5s()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateLoadPatn5(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteLoadPatn5(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
