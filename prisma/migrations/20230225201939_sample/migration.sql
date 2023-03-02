-- CreateTable
CREATE TABLE "Sample" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "extract_date" TIMESTAMPTZ(0),
    "extract_method" TEXT,
    "process_date" TIMESTAMPTZ(0),
    "process_method" TEXT,
    "nuclei_count" TEXT,
    "nuclei_count_result" TEXT,
    "status" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "specimenId" TEXT,

    CONSTRAINT "Sample_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Sample" ADD CONSTRAINT "Sample_specimenId_fkey" FOREIGN KEY ("specimenId") REFERENCES "Specimen"("id") ON DELETE SET NULL ON UPDATE CASCADE;
