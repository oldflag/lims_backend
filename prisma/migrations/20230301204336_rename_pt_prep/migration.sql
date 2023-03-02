/*
  Warnings:

  - You are about to drop the `PTPrep` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PTPrep" DROP CONSTRAINT "PTPrep_assayId_fkey";

-- DropForeignKey
ALTER TABLE "PTPrep" DROP CONSTRAINT "PTPrep_nucleiIncubationId_fkey";

-- DropForeignKey
ALTER TABLE "PTPrep" DROP CONSTRAINT "PTPrep_rnaRTId_fkey";

-- DropForeignKey
ALTER TABLE "PTPrep" DROP CONSTRAINT "PTPrep_washAndTagId_fkey";

-- DropTable
DROP TABLE "PTPrep";

-- CreateTable
CREATE TABLE "PtPrep" (
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

    CONSTRAINT "PtPrep_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PtPrep_assayId_key" ON "PtPrep"("assayId");

-- CreateIndex
CREATE UNIQUE INDEX "PtPrep_nucleiIncubationId_key" ON "PtPrep"("nucleiIncubationId");

-- CreateIndex
CREATE UNIQUE INDEX "PtPrep_washAndTagId_key" ON "PtPrep"("washAndTagId");

-- CreateIndex
CREATE UNIQUE INDEX "PtPrep_rnaRTId_key" ON "PtPrep"("rnaRTId");

-- AddForeignKey
ALTER TABLE "PtPrep" ADD CONSTRAINT "PtPrep_assayId_fkey" FOREIGN KEY ("assayId") REFERENCES "Assay"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PtPrep" ADD CONSTRAINT "PtPrep_nucleiIncubationId_fkey" FOREIGN KEY ("nucleiIncubationId") REFERENCES "NucleiIncubation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PtPrep" ADD CONSTRAINT "PtPrep_washAndTagId_fkey" FOREIGN KEY ("washAndTagId") REFERENCES "WashAndTag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PtPrep" ADD CONSTRAINT "PtPrep_rnaRTId_fkey" FOREIGN KEY ("rnaRTId") REFERENCES "RnaRT"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
