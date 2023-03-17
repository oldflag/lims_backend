import { createSeqLibrary, getSeqLibrarys, updateSeqLibrary, deleteSeqLibrary, getSeqLibrary } from '../lib/seqLibrarys.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { id, name, seqRunId, libType, dnaLibraryId, rnaLibraryId, status } = req.body;
  const results = await createSeqLibrary({ id, name, seqRunId, libType, dnaLibraryId, rnaLibraryId, status  })
  // console.log(results)
  const editedResults = await getSeqLibrary(results.id)
  // console.log(editedResults)
  res.status(200).json({ success: true, result: editedResults });
});

export const getAll = tryCatch(async (req, res) => {
  let results = await getSeqLibrarys()
  // console.log(results)
  let editedResults = !results ? results : results.map(arow =>(
    {
      id: arow.id,
      name: arow.name,
      seqRun_name: arow.seqRun_name,
      libType: arow.libType,
      batchId: arow.libType.toUpperCase() === 'DNA' ? arow.dnaLibrary_lysis_batchId : arow.rnaLibrary_lysis_batchId,
      lysis_name: arow.libType.toUpperCase() === 'DNA' ? arow.dnaLibrary_lysis_name : arow.rnaLibrary_lysis_name,
      library_name: arow.libType.toUpperCase() === 'DNA' ? arow.dnaLibrary_name : arow.rnaLibrary_name,
      i7Primer_rcSeq: arow.libType.toUpperCase() === 'DNA' ? arow.dnaLibrary_dnaLibMultiplex_i7Primer_rcSeq : arow.rnaLibrary_rnaLibMultiplex_i7Primer_rcSeq,
      i7Primer_name: arow.libType.toUpperCase() === 'DNA' ? arow.dnaLibrary_dnaLibMultiplex_i7Primer_id : arow.rnaLibrary_rnaLibMultiplex_i7Primer_id,
      i5Primer_fSeq: arow.libType.toUpperCase() === 'DNA' ? arow.dnaLibrary_dnaLibMultiplex_i5Primer_fSeq : arow.rnaLibrary_rnaLibMultiplex_i5Primer_fSeq,
      i5Primer_name: arow.libType.toUpperCase() === 'DNA' ? arow.dnaLibrary_dnaLibMultiplex_i5Primer_id : arow.rnaLibrary_rnaLibMultiplex_i5Primer_id,
      file1: arow.file1,
      file2: arow.file2,
      status: arow.status,
      createdAt: arow.createdAt,
    }
  ))
  res.status(200).json({ success: true, result: editedResults });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateSeqLibrary(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteSeqLibrary(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
