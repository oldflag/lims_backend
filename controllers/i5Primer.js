import { getI5Primers } from '../lib/i5Primers.js';

import tryCatch from './utils/tryCatch.js';

export const getAll = tryCatch(async (req, res) => {
  const results = await getI5Primers()
  res.status(200).json({ success: true, result: results });
});
