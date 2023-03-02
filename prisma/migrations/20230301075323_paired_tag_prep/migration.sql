-- CreateTable
CREATE TABLE "PTPrep" (
    "id" TEXT NOT NULL,
    "assayId" TEXT NOT NULL,
    "operator" TEXT,
    "status" TEXT,
    "memo" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nucleiIncubationId" TEXT NOT NULL,
    "washAndTagId" TEXT NOT NULL,
    "rnaRTId" TEXT NOT NULL,

    CONSTRAINT "PTPrep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NucleiIncubation" (
    "id" TEXT NOT NULL,
    "assayId" TEXT NOT NULL,
    "reagentInfo" TEXT,
    "operator" TEXT,
    "status" TEXT,
    "memo" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMPTZ(0),

    CONSTRAINT "NucleiIncubation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WashAndTag" (
    "id" TEXT NOT NULL,
    "assayId" TEXT NOT NULL,
    "reagentInfo" TEXT,
    "operator" TEXT,
    "qcClumps" TEXT,
    "status" TEXT,
    "memo" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMPTZ(0),

    CONSTRAINT "WashAndTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RnaRT" (
    "id" TEXT NOT NULL,
    "assayId" TEXT NOT NULL,
    "reagentInfo" TEXT,
    "operator" TEXT,
    "qcClumps" TEXT,
    "status" TEXT,
    "memo" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMPTZ(0),

    CONSTRAINT "RnaRT_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PTPrep_assayId_key" ON "PTPrep"("assayId");

-- CreateIndex
CREATE UNIQUE INDEX "PTPrep_nucleiIncubationId_key" ON "PTPrep"("nucleiIncubationId");

-- CreateIndex
CREATE UNIQUE INDEX "PTPrep_washAndTagId_key" ON "PTPrep"("washAndTagId");

-- CreateIndex
CREATE UNIQUE INDEX "PTPrep_rnaRTId_key" ON "PTPrep"("rnaRTId");

-- CreateIndex
CREATE UNIQUE INDEX "NucleiIncubation_assayId_key" ON "NucleiIncubation"("assayId");

-- CreateIndex
CREATE UNIQUE INDEX "WashAndTag_assayId_key" ON "WashAndTag"("assayId");

-- CreateIndex
CREATE UNIQUE INDEX "RnaRT_assayId_key" ON "RnaRT"("assayId");

-- AddForeignKey
ALTER TABLE "PTPrep" ADD CONSTRAINT "PTPrep_assayId_fkey" FOREIGN KEY ("assayId") REFERENCES "Assay"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PTPrep" ADD CONSTRAINT "PTPrep_nucleiIncubationId_fkey" FOREIGN KEY ("nucleiIncubationId") REFERENCES "NucleiIncubation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PTPrep" ADD CONSTRAINT "PTPrep_washAndTagId_fkey" FOREIGN KEY ("washAndTagId") REFERENCES "WashAndTag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PTPrep" ADD CONSTRAINT "PTPrep_rnaRTId_fkey" FOREIGN KEY ("rnaRTId") REFERENCES "RnaRT"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NucleiIncubation" ADD CONSTRAINT "NucleiIncubation_assayId_fkey" FOREIGN KEY ("assayId") REFERENCES "Assay"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WashAndTag" ADD CONSTRAINT "WashAndTag_assayId_fkey" FOREIGN KEY ("assayId") REFERENCES "Assay"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RnaRT" ADD CONSTRAINT "RnaRT_assayId_fkey" FOREIGN KEY ("assayId") REFERENCES "Assay"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
