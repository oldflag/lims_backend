import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/userRouter.js';

import collaboratorRouter from './routes/collaboratorRouter.js';
import donorRouter from './routes/donorRouter.js';
import specimenRouter from './routes/specimenRouter.js';
import projectRouter from './routes/projectRouter.js';
import antibodyRouter from './routes/antibodyRouter.js';
import patn5Router from './routes/patn5Router.js';
import reagentRouter from './routes/reagentRouter.js';
import experimentRouter from './routes/experimentRouter.js';
import sampleRouter from './routes/sampleRouter.js';
import batchRouter from './routes/batchRouter.js';
import assayRouter from './routes/assayRouter.js';
import assayBarcodeRouter from './routes/assayBarcodeRouter.js';
import loadPatn5Router from './routes/loadPatn5Router.js';
import ptPrepRouter from './routes/ptPrepRouter.js';
import nucleiIncubationRouter from './routes/nucleiIncubationRouter.js';
import washAndTagRouter from './routes/washAndTagRouter.js';
import rnaRTRouter from './routes/rnaRTRouter.js';
import splitPoolRouter from './routes/splitPoolRouter.js';
import lysisRouter from './routes/lysisRouter.js';
import tdtTailingRouter from './routes/tdtTailingRouter.js';
import linearAmpAnchorRouter from './routes/linearAmpAnchorRouter.js';
import preAmpRouter from './routes/preAmpRouter.js';
import doubleSizeSelectRouter from './routes/doubleSizeSelectRouter.js';
import rnaLibraryRouter from './routes/rnaLibraryRouter.js';
import rnaSplitEnzymeRouter from './routes/rnaSplitEnzymeRouter.js';
import rnaAdapterRouter from './routes/rnaAdapterRouter.js';
import rnaLibMultiplexRouter from './routes/rnaLibMultiplexRouter.js';
import dnaLibraryRouter from './routes/dnaLibraryRouter.js';
import dnaSplitEnzymeRouter from './routes/dnaSplitEnzymeRouter.js';
import dnaAdapterRouter from './routes/dnaAdapterRouter.js';
import dnaLibMultiplexRouter from './routes/dnaLibMultiplexRouter.js';
import seqLibraryRouter from './routes/seqLibraryRouter.js';
import seqRunRouter from './routes/seqRunRouter.js';
import i5PrimerRouter from './routes/i5PrimerRouter.js';
import i7PrimerRouter from './routes/i7PrimerRouter.js';
import quoteRouter from './routes/quoteRouter.js';
import tapeStationRouter from './routes/tapeStationRouter.js'

dotenv.config();

const port = process.env.PORT || 5001;

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With, Content-Type, Authorization'
  );
  next();
});

app.use(express.json({ limit: '10mb' }));

// app.use('/room', roomRouter);
app.use('/user', userRouter);
app.use('/collaborator', collaboratorRouter);
app.use('/donor', donorRouter);
app.use('/specimen', specimenRouter);
app.use('/project', projectRouter);
app.use('/antibody', antibodyRouter);
app.use('/patn5', patn5Router);
app.use('/loadPatn5', loadPatn5Router);
app.use('/reagent', reagentRouter);
app.use('/experiment', experimentRouter);
app.use('/sample', sampleRouter);
app.use('/batch', batchRouter);
app.use('/assay', assayRouter);
app.use('/assayBarcode', assayBarcodeRouter);
app.use('/ptPrep', ptPrepRouter);
app.use('/nucleiIncubation', nucleiIncubationRouter);
app.use('/washAndTag', washAndTagRouter);
app.use('/rnaRT', rnaRTRouter);
app.use('/splitPool', splitPoolRouter);
app.use('/lysis', lysisRouter);
app.use('/tdtTailing', tdtTailingRouter);
app.use('/linearAmpAnchor', linearAmpAnchorRouter);
app.use('/preAmp', preAmpRouter);
app.use('/doubleSizeSelect', doubleSizeSelectRouter);
app.use('/rnaLibrary', rnaLibraryRouter);
app.use('/rnaSplitEnzyme', rnaSplitEnzymeRouter);
app.use('/rnaAdapter', rnaAdapterRouter);
app.use('/rnaLibMultiplex', rnaLibMultiplexRouter);
app.use('/dnaLibrary', dnaLibraryRouter);
app.use('/dnaSplitEnzyme', dnaSplitEnzymeRouter);
app.use('/dnaAdapter', dnaAdapterRouter);
app.use('/dnaLibMultiplex', dnaLibMultiplexRouter);
app.use('/seqLibrary', seqLibraryRouter);
app.use('/seqRun', seqRunRouter);
app.use('/i7Primer', i7PrimerRouter);
app.use('/i5Primer', i5PrimerRouter);
app.use('/quote', quoteRouter);
app.use('/tapeStation', tapeStationRouter);

app.get('/', (req, res) => res.json({ message: 'Welcome to our API' }));
app.use((req, res) =>
  res.status(404).json({ success: false, message: 'Not Found' })
);

const startServer = async () => {
  try {
    // connect to mongodb
    app.listen(port, () => console.log(`Server is listening on port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();