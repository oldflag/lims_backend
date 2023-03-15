-- CreateTable
CREATE TABLE "SplitPool" (
    "id" TEXT NOT NULL,
    "batchId" TEXT NOT NULL,
    "reagentInfo" TEXT,
    "spLayout" TEXT,
    "qcClumps" TEXT,
    "memo" TEXT,
    "status" TEXT,
    "operator" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SplitPool_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SplitPool_batchId_key" ON "SplitPool"("batchId");

-- AddForeignKey
ALTER TABLE "SplitPool" ADD CONSTRAINT "SplitPool_batchId_fkey" FOREIGN KEY ("batchId") REFERENCES "Batch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
