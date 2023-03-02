-- CreateTable
CREATE TABLE "Patn5" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "manufacturer" TEXT,
    "part" TEXT,
    "lot" TEXT,
    "status" TEXT,
    "expiration_date" TIMESTAMPTZ(0),
    "metadata" JSONB,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Patn5_pkey" PRIMARY KEY ("id")
);
