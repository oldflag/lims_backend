/*
  Warnings:

  - You are about to drop the column `i5Primer` on the `DnaLibMultiplex` table. All the data in the column will be lost.
  - You are about to drop the column `i7Primer` on the `DnaLibMultiplex` table. All the data in the column will be lost.
  - You are about to drop the column `i5Primer` on the `RnaLibMultiplex` table. All the data in the column will be lost.
  - You are about to drop the column `i7Primer` on the `RnaLibMultiplex` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DnaLibMultiplex" DROP COLUMN "i5Primer",
DROP COLUMN "i7Primer",
ADD COLUMN     "i5PrimerId" TEXT,
ADD COLUMN     "i7PrimerId" TEXT;

-- AlterTable
ALTER TABLE "RnaLibMultiplex" DROP COLUMN "i5Primer",
DROP COLUMN "i7Primer",
ADD COLUMN     "i5PrimerId" TEXT,
ADD COLUMN     "i7PrimerId" TEXT;

-- CreateTable
CREATE TABLE "I7Primer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "fSeq" TEXT NOT NULL,
    "rcSeq" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "I7Primer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "I5Primer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "fSeq" TEXT NOT NULL,
    "rcSeq" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "I5Primer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RnaLibMultiplex" ADD CONSTRAINT "RnaLibMultiplex_i7PrimerId_fkey" FOREIGN KEY ("i7PrimerId") REFERENCES "I7Primer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RnaLibMultiplex" ADD CONSTRAINT "RnaLibMultiplex_i5PrimerId_fkey" FOREIGN KEY ("i5PrimerId") REFERENCES "I5Primer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DnaLibMultiplex" ADD CONSTRAINT "DnaLibMultiplex_i7PrimerId_fkey" FOREIGN KEY ("i7PrimerId") REFERENCES "I7Primer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DnaLibMultiplex" ADD CONSTRAINT "DnaLibMultiplex_i5PrimerId_fkey" FOREIGN KEY ("i5PrimerId") REFERENCES "I5Primer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
