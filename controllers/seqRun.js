import { createSeqRun, getSeqRuns, updateSeqRun, deleteSeqRun, getSeqRun } from '../lib/seqRuns.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { id, name, seqDate, machine, memo, operator, status } = req.body;
  const results = await createSeqRun({ id, name, seqDate, machine, memo, operator, status  })
  const editedResults = await getSeqRun(results.id)
  res.status(200).json({ success: true, result: editedResults });
});

export const getAll = tryCatch(async (req, res) => {
  let results = await getSeqRuns()

  console.log(results);

  let editedResults = !results ? results : results.map(arow =>(
    {
      id: arow.id,
      name: arow.name,
      seqDate: arow.seqDate,
      batch_name: Array.from(new Set(arow.seqLibrarys.map( aLib => aLib.libType === 'DNA' ? aLib.dnaLibrary.lysis.batch.name : aLib.rnaLibrary.lysis.batch.name))).join(";"),
      machine: arow.machine, 
      memo: arow.memo,  
      status: arow.status,
      createdAt: arow.createdAt,
    }
  ))

  console.log(editedResults)

  res.status(200).json({ success: true, result: editedResults });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateSeqRun(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteSeqRun(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
