-- CreateTable
CREATE TABLE "LoadPatn5" (
    "id" TEXT NOT NULL,
    "loadName" TEXT NOT NULL,
    "tubeNum" INTEGER NOT NULL,
    "patn5Id" TEXT NOT NULL,
    "dnaInfo" TEXT,
    "status" TEXT,
    "expiration_date" TIMESTAMPTZ(0),
    "memo" TEXT,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LoadPatn5_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssayBarcode" (
    "id" TEXT NOT NULL,
    "barcode" TEXT NOT NULL,
    "tubeNum" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "AssayBarcode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Assay" (
    "id" TEXT NOT NULL,
    "sampleId" TEXT,
    "experimentId" TEXT NOT NULL,
    "batchId" TEXT NOT NULL,
    "numOfNuclei" INTEGER,
    "tubeNum" INTEGER NOT NULL,
    "barcode" TEXT NOT NULL,
    "assayType" TEXT,
    "beadTime" TEXT,
    "loadPatn5Id" TEXT,
    "antibodyId" TEXT,
    "antibodyConcentration" TEXT,
    "antibodyConcUnit" TEXT,
    "antibodyVolume" TEXT,
    "antibodyVolUnit" TEXT,
    "assayDate" TIMESTAMPTZ(0),
    "status" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Assay_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LoadPatn5" ADD CONSTRAINT "LoadPatn5_patn5Id_fkey" FOREIGN KEY ("patn5Id") REFERENCES "Patn5"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assay" ADD CONSTRAINT "Assay_sampleId_fkey" FOREIGN KEY ("sampleId") REFERENCES "Sample"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assay" ADD CONSTRAINT "Assay_experimentId_fkey" FOREIGN KEY ("experimentId") REFERENCES "Experiment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assay" ADD CONSTRAINT "Assay_batchId_fkey" FOREIGN KEY ("batchId") REFERENCES "Batch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assay" ADD CONSTRAINT "Assay_loadPatn5Id_fkey" FOREIGN KEY ("loadPatn5Id") REFERENCES "LoadPatn5"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assay" ADD CONSTRAINT "Assay_antibodyId_fkey" FOREIGN KEY ("antibodyId") REFERENCES "Antibody"("id") ON DELETE SET NULL ON UPDATE CASCADE;
