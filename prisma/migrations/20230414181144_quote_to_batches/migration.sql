/*
  Warnings:

  - You are about to drop the column `assayType` on the `Assay` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Batch_quoteId_key";

-- AlterTable
ALTER TABLE "Assay" DROP COLUMN IF EXISTS "assayType";
