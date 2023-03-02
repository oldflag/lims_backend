-- CreateTable
CREATE TABLE "Specimen" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "species" TEXT,
    "tissue" TEXT,
    "tissue_amount" TEXT,
    "tissue_amount_unit" TEXT,
    "receipt_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "qc_note" TEXT,
    "qc_date" TEXT,
    "collection_date" TIMESTAMP(3),
    "received_cell_count" TEXT,
    "cell_count_result" TEXT,
    "nuclei_count_result" TEXT,
    "freeze_thaw" TEXT,
    "last_frozen_date" TIMESTAMP(3),
    "memo" TEXT,
    "storage_condition" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,
    "donorId" TEXT,

    CONSTRAINT "Specimen_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Specimen" ADD CONSTRAINT "Specimen_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "Donor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
