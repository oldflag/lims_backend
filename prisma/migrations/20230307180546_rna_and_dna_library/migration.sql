-- CreateTable
CREATE TABLE "RnaLibrary" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lysisId" TEXT NOT NULL,
    "memo" TEXT,
    "status" TEXT,
    "operator" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RnaLibrary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RnaSplitEnzyme" (
    "id" TEXT NOT NULL,
    "rnaLibraryId" TEXT NOT NULL,
    "reagentInfo" TEXT,
    "beadRatio" TEXT,
    "memo" TEXT,
    "status" TEXT,
    "operator" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RnaSplitEnzyme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RnaAdapter" (
    "id" TEXT NOT NULL,
    "rnaLibraryId" TEXT NOT NULL,
    "reagentInfo" TEXT,
    "memo" TEXT,
    "status" TEXT,
    "operator" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RnaAdapter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RnaLibMultiplex" (
    "id" TEXT NOT NULL,
    "rnaLibraryId" TEXT NOT NULL,
    "reagentInfo" TEXT,
    "i7Primer" TEXT,
    "i5Primer" TEXT,
    "beadRatio" TEXT,
    "memo" TEXT,
    "status" TEXT,
    "operator" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RnaLibMultiplex_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DnaLibrary" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lysisId" TEXT NOT NULL,
    "memo" TEXT,
    "status" TEXT,
    "operator" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DnaLibrary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DnaSplitEnzyme" (
    "id" TEXT NOT NULL,
    "dnaLibraryId" TEXT NOT NULL,
    "reagentInfo" TEXT,
    "beadRatio" TEXT,
    "memo" TEXT,
    "status" TEXT,
    "operator" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DnaSplitEnzyme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DnaAdapter" (
    "id" TEXT NOT NULL,
    "dnaLibraryId" TEXT NOT NULL,
    "reagentInfo" TEXT,
    "memo" TEXT,
    "status" TEXT,
    "operator" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DnaAdapter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DnaLibMultiplex" (
    "id" TEXT NOT NULL,
    "dnaLibraryId" TEXT NOT NULL,
    "reagentInfo" TEXT,
    "i7Primer" TEXT,
    "i5Primer" TEXT,
    "beadRatio" TEXT,
    "memo" TEXT,
    "status" TEXT,
    "operator" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DnaLibMultiplex_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RnaLibrary_lysisId_key" ON "RnaLibrary"("lysisId");

-- CreateIndex
CREATE UNIQUE INDEX "RnaSplitEnzyme_rnaLibraryId_key" ON "RnaSplitEnzyme"("rnaLibraryId");

-- CreateIndex
CREATE UNIQUE INDEX "RnaAdapter_rnaLibraryId_key" ON "RnaAdapter"("rnaLibraryId");

-- CreateIndex
CREATE UNIQUE INDEX "RnaLibMultiplex_rnaLibraryId_key" ON "RnaLibMultiplex"("rnaLibraryId");

-- CreateIndex
CREATE UNIQUE INDEX "DnaLibrary_lysisId_key" ON "DnaLibrary"("lysisId");

-- CreateIndex
CREATE UNIQUE INDEX "DnaSplitEnzyme_dnaLibraryId_key" ON "DnaSplitEnzyme"("dnaLibraryId");

-- CreateIndex
CREATE UNIQUE INDEX "DnaAdapter_dnaLibraryId_key" ON "DnaAdapter"("dnaLibraryId");

-- CreateIndex
CREATE UNIQUE INDEX "DnaLibMultiplex_dnaLibraryId_key" ON "DnaLibMultiplex"("dnaLibraryId");

-- AddForeignKey
ALTER TABLE "RnaLibrary" ADD CONSTRAINT "RnaLibrary_lysisId_fkey" FOREIGN KEY ("lysisId") REFERENCES "Lysis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RnaSplitEnzyme" ADD CONSTRAINT "RnaSplitEnzyme_rnaLibraryId_fkey" FOREIGN KEY ("rnaLibraryId") REFERENCES "RnaLibrary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RnaAdapter" ADD CONSTRAINT "RnaAdapter_rnaLibraryId_fkey" FOREIGN KEY ("rnaLibraryId") REFERENCES "RnaLibrary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RnaLibMultiplex" ADD CONSTRAINT "RnaLibMultiplex_rnaLibraryId_fkey" FOREIGN KEY ("rnaLibraryId") REFERENCES "RnaLibrary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DnaLibrary" ADD CONSTRAINT "DnaLibrary_lysisId_fkey" FOREIGN KEY ("lysisId") REFERENCES "Lysis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DnaSplitEnzyme" ADD CONSTRAINT "DnaSplitEnzyme_dnaLibraryId_fkey" FOREIGN KEY ("dnaLibraryId") REFERENCES "DnaLibrary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DnaAdapter" ADD CONSTRAINT "DnaAdapter_dnaLibraryId_fkey" FOREIGN KEY ("dnaLibraryId") REFERENCES "DnaLibrary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DnaLibMultiplex" ADD CONSTRAINT "DnaLibMultiplex_dnaLibraryId_fkey" FOREIGN KEY ("dnaLibraryId") REFERENCES "DnaLibrary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
