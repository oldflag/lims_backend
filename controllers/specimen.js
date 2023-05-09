import { createSpecimen, getSpecimens, updateSpecimen, updateWithSamples, deleteSpecimen, getSpecimen } from '../lib/specimens.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { id, 
          name, 
          species, 
          tissue, 
          tissue_amount, 
          tissue_amount_unit, 
          receipt_date,
          uberon_id, 
          qc_note,
          qc_date,
          collection_date,
          received_cell_count,
          cell_count_result,
          nuclei_count_result,
          freeze_thaw,
          last_frozen_date,
          memo,
          storage_condition,
          createdAt,
          metadata,
          donorId,
          projectId } = req.body;
  const results = await createSpecimen({  id, 
                                          name, 
                                          species, 
                                          tissue, 
                                          tissue_amount, 
                                          tissue_amount_unit, 
                                          receipt_date,
                                          uberon_id, 
                                          qc_note,
                                          qc_date,
                                          collection_date,
                                          received_cell_count,
                                          cell_count_result,
                                          nuclei_count_result,
                                          freeze_thaw,
                                          last_frozen_date,
                                          memo,
                                          storage_condition,
                                          createdAt,
                                          metadata,
                                          donorId,
                                          projectId})
  const editedResults = await getSpecimen(results.id)
  // console.log(editedResults)
  res.status(200).json({ success: true, result: editedResults });
});

export const getAll = tryCatch(async (req, res) => {
  let results = await getSpecimens()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateSpecimen(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const updateRelatedSamples = tryCatch(async (req, res) => {
  let results = await updateWithSamples(req.params.Id, req.body);
  console.log(results)
  res.status(200).json({ success: true, result: { id: req.params.Id } }); 
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteSpecimen(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
