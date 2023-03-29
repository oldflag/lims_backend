/*
  Warnings:

  - A unique constraint covering the columns `[quoteId]` on the table `Batch` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Batch" ADD COLUMN     "quoteId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Batch_quoteId_key" ON "Batch"("quoteId");

-- AddForeignKey
ALTER TABLE "Batch" ADD CONSTRAINT "Batch_quoteId_fkey" FOREIGN KEY ("quoteId") REFERENCES "Quote"("id") ON DELETE SET NULL ON UPDATE CASCADE;
