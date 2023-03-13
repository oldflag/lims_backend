-- CreateTable
CREATE TABLE "TdtTailing" (
    "id" TEXT NOT NULL,
    "lysisId" TEXT NOT NULL,
    "reagentInfo" TEXT,
    "memo" TEXT,
    "status" TEXT,
    "operator" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TdtTailing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LinearAmpAnchor" (
    "id" TEXT NOT NULL,
    "lysisId" TEXT NOT NULL,
    "reagentInfo" TEXT,
    "memo" TEXT,
    "status" TEXT,
    "operator" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LinearAmpAnchor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PreAmp" (
    "id" TEXT NOT NULL,
    "lysisId" TEXT NOT NULL,
    "reagentInfo" TEXT,
    "memo" TEXT,
    "status" TEXT,
    "operator" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PreAmp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DoubleSizeSelect" (
    "id" TEXT NOT NULL,
    "lysisId" TEXT NOT NULL,
    "reagentInfo" TEXT,
    "beadsRatio1" TEXT,
    "beadsRatio2" TEXT,
    "qcConcent" TEXT,
    "memo" TEXT,
    "status" TEXT,
    "operator" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DoubleSizeSelect_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TdtTailing_lysisId_key" ON "TdtTailing"("lysisId");

-- CreateIndex
CREATE UNIQUE INDEX "LinearAmpAnchor_lysisId_key" ON "LinearAmpAnchor"("lysisId");

-- CreateIndex
CREATE UNIQUE INDEX "PreAmp_lysisId_key" ON "PreAmp"("lysisId");

-- CreateIndex
CREATE UNIQUE INDEX "DoubleSizeSelect_lysisId_key" ON "DoubleSizeSelect"("lysisId");

-- AddForeignKey
ALTER TABLE "TdtTailing" ADD CONSTRAINT "TdtTailing_lysisId_fkey" FOREIGN KEY ("lysisId") REFERENCES "Lysis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinearAmpAnchor" ADD CONSTRAINT "LinearAmpAnchor_lysisId_fkey" FOREIGN KEY ("lysisId") REFERENCES "Lysis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PreAmp" ADD CONSTRAINT "PreAmp_lysisId_fkey" FOREIGN KEY ("lysisId") REFERENCES "Lysis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DoubleSizeSelect" ADD CONSTRAINT "DoubleSizeSelect_lysisId_fkey" FOREIGN KEY ("lysisId") REFERENCES "Lysis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
