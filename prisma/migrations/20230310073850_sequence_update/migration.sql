-- DropForeignKey
ALTER TABLE "SeqLibrary" DROP CONSTRAINT "SeqLibrary_dnaLibraryId_fkey";

-- DropForeignKey
ALTER TABLE "SeqLibrary" DROP CONSTRAINT "SeqLibrary_rnaLibraryId_fkey";

-- AlterTable
ALTER TABLE "SeqLibrary" ALTER COLUMN "dnaLibraryId" DROP NOT NULL,
ALTER COLUMN "rnaLibraryId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "SeqLibrary" ADD CONSTRAINT "SeqLibrary_dnaLibraryId_fkey" FOREIGN KEY ("dnaLibraryId") REFERENCES "DnaLibrary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeqLibrary" ADD CONSTRAINT "SeqLibrary_rnaLibraryId_fkey" FOREIGN KEY ("rnaLibraryId") REFERENCES "RnaLibrary"("id") ON DELETE SET NULL ON UPDATE CASCADE;
