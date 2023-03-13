-- CreateTable
CREATE TABLE "SeqRun" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "seqDate" TIMESTAMPTZ(0),
    "machine" TEXT,
    "memo" TEXT,
    "status" TEXT,
    "operator" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SeqRun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeqLibrary" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "seqRunId" TEXT NOT NULL,
    "libType" TEXT NOT NULL,
    "dnaLibraryId" TEXT NOT NULL,
    "rnaLibraryId" TEXT NOT NULL,
    "file1" TEXT,
    "file2" TEXT,
    "status" TEXT,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SeqLibrary_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SeqLibrary_dnaLibraryId_key" ON "SeqLibrary"("dnaLibraryId");

-- CreateIndex
CREATE UNIQUE INDEX "SeqLibrary_rnaLibraryId_key" ON "SeqLibrary"("rnaLibraryId");

-- AddForeignKey
ALTER TABLE "SeqLibrary" ADD CONSTRAINT "SeqLibrary_seqRunId_fkey" FOREIGN KEY ("seqRunId") REFERENCES "SeqRun"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeqLibrary" ADD CONSTRAINT "SeqLibrary_dnaLibraryId_fkey" FOREIGN KEY ("dnaLibraryId") REFERENCES "DnaLibrary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeqLibrary" ADD CONSTRAINT "SeqLibrary_rnaLibraryId_fkey" FOREIGN KEY ("rnaLibraryId") REFERENCES "RnaLibrary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
