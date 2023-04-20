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

  // console.log(JSON.stringify(results));

  let editedResults = !results ? results : results.map(arow =>(
    {
      id: arow.id,
      name: arow.name,
      seqDate: arow.seqDate,
      batch_name: arow.seqLibrarys[0].libType === 'DNA' ? arow.seqLibrarys[0].dnaLibrary.lysis.batch.name : arow.seqLibrarys[0].rnaLibrary.lysis.batch.name,
      machine: arow.machine, 
      memo: arow.memo,  
      status: arow.status,
      createdAt: arow.createdAt,
    }
  ))

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
