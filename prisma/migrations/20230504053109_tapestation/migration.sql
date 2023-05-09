-- CreateTable
CREATE TABLE "TapeStation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "libType" TEXT NOT NULL,
    "dnaLibraryId" TEXT,
    "rnaLibraryId" TEXT,
    "resultFile" TEXT,
    "status" TEXT,
    "operator" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TapeStation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TapeStation" ADD CONSTRAINT "TapeStation_dnaLibraryId_fkey" FOREIGN KEY ("dnaLibraryId") REFERENCES "DnaLibrary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TapeStation" ADD CONSTRAINT "TapeStation_rnaLibraryId_fkey" FOREIGN KEY ("rnaLibraryId") REFERENCES "RnaLibrary"("id") ON DELETE SET NULL ON UPDATE CASCADE;
