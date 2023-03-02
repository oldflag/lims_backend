import { createPatn5, getPatn5s, updatePatn5, deletePatn5 } from '../lib/patn5s.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { id, name, manufacturer, part, lot, expiration_date, status, metadata} = req.body;
  const results = await createPatn5({ id, name, manufacturer, part, lot, expiration_date, status, metadata})
  res.status(200).json({ success: true, result: results });
});

export const getAll = tryCatch(async (req, res) => {
  const results = await getPatn5s()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updatePatn5(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deletePatn5(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
