import { createTapeStation, getTapeStations, updateTapeStation, deleteTapeStation, getTapeStation } from '../lib/tapeStations.js';
import tryCatch from './utils/tryCatch.js';
export const createOne = tryCatch(async (req, res) => {

  const { id, name, libType, dnaLibraryId, rnaLibraryId, resultFile, status, operator } = req.body;

  const results = await createTapeStation({ id, name, libType, dnaLibraryId, rnaLibraryId, resultFile, status, operator  })
  // console.log(results)
  const aResult = await getTapeStation(results.id)
  // console.log(aResult)
  // aResult.resultUrl = await getObjectSignedUrl(aResult.resultFile)
  aResult.resultUrl = aResult.resultFile
  let editedResult = {

    id: aResult.id,
    name: aResult.name,
    libType: aResult.libType,
    batch_name: aResult.libType.toUpperCase() === 'DNA' ? aResult.dnaLibrary_lysis_batch_name : aResult.rnaLibrary_lysis_batch_name,
    library_name: aResult.libType.toUpperCase() === 'DNA' ? aResult.dnaLibrary_name : aResult.rnaLibrary_name,
    resultFile: aResult.resultUrl,
    status: aResult.status,
    operator: aResult.operator,
    createdAt: aResult.createdAt,

  }

  // console.log(editedResults)
  res.status(200).json({ success: true, result: editedResult });
});

export const getAll = tryCatch(async (req, res) => {
  let results = await getTapeStations()
  
  for ( let aRow of results) {
    // aRow.resultUrl = await getObjectSignedUrl(aRow.resultFile)
    aRow.resultUrl = aRow.resultFile
  }
  // console.log(results)
  let editedResults = !results ? results : results.map(aRow =>(
    {
      id: aRow.id,
      name: aRow.name,
      libType: aRow.libType,
      batch_name: aRow.libType.toUpperCase() === 'DNA' ? aRow.dnaLibrary_lysis_batch_name : aRow.rnaLibrary_lysis_batch_name,
      library_name: aRow.libType.toUpperCase() === 'DNA' ? aRow.dnaLibrary_name : aRow.rnaLibrary_name,
      resultFile: aRow.resultUrl,
      status: aRow.status,
      operator: aRow.operator,
      createdAt: aRow.createdAt,
    }
  ))
  res.status(200).json({ success: true, result: editedResults });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateTapeStation(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteTapeStation(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
