import { createAssay, getAssays, updateAssay, deleteAssay, getAssay, importAssay } from '../lib/assays.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { 
          id, 
          sampleId, 
          experimentId, 
          batchId, 
          numOfNuclei, 
          tubeNum, 
          barcode, 
          // assayType, 
          beadTime, 
          loadPatn5Name, 
          antibodyId, 
          antibodyConcentration, 
          antibodyConcUnit,
          antibodyVolume,
          antibodyVolUnit,
          assayDate,
          status,
          metadata
   } = req.body;
  const results = await createAssay({ 
      id, 
      sampleId, 
      experimentId, 
      batchId, 
      numOfNuclei, 
      tubeNum, 
      barcode, 
      // assayType, 
      beadTime, 
      loadPatn5Name, 
      antibodyId, 
      antibodyConcentration, 
      antibodyConcUnit,
      antibodyVolume,
      antibodyVolUnit,
      assayDate,
      status,
      metadata
  })
  const editedResults = await getAssay(results.id)
  res.status(200).json({ success: true, result: editedResults });
});

export const importOne = tryCatch(async (req, res) => {

  const results = await importAssay(req.body)
  res.status(200).json({ success: true, result: results });
});

export const getAll = tryCatch(async (req, res) => {
  let results = await getAssays()
  // console.log(results)
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateAssay(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteAssay(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
