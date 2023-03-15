-- CreateTable
CREATE TABLE "Lysis" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "splitPoolId" TEXT NOT NULL,
    "batchId" TEXT NOT NULL,
    "quantity" TEXT,
    "quantityUnit" TEXT,
    "memo" TEXT,
    "status" TEXT,
    "operator" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Lysis_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Lysis" ADD CONSTRAINT "Lysis_splitPoolId_fkey" FOREIGN KEY ("splitPoolId") REFERENCES "SplitPool"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lysis" ADD CONSTRAINT "Lysis_batchId_fkey" FOREIGN KEY ("batchId") REFERENCES "Batch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
