import { createQuote, getQuotes, updateQuote, deleteQuote, getQuote, createQuotes, importQuote } from '../lib/quotes.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  // const { id, name, age, sex, ancestry, species, status, metadata, collaboratorId } = req.body;
  const results = await createQuote(req.body)
  const editedResults = await getQuote(results.id)
  res.status(200).json({ success: true, result: editedResults });
});

export const createMany = tryCatch(async (req, res) => {
  // const { id, name, age, sex, ancestry, species, status, metadata, collaboratorId } = req.body;
  const results = await createQuotes(req.body)
  // const editedResults = await getQuote(results.id)
  res.status(200).json({ success: true, result: results });
});

export const importOne = tryCatch(async (req, res) => {

  const results = await importQuote(req.body)
  res.status(200).json({ success: true, result: results });
});

export const getAll = tryCatch(async (req, res) => {
  let results = await getQuotes()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateQuote(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteQuote(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
