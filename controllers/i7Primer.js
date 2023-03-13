import { getI7Primers } from '../lib/i7Primers.js';

import tryCatch from './utils/tryCatch.js';

export const getAll = tryCatch(async (req, res) => {
  const results = await getI7Primers()
  res.status(200).json({ success: true, result: results });
});
