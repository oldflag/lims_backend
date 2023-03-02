-- CreateTable
CREATE TABLE "Reagent" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "generic_name" TEXT,
    "part" TEXT,
    "lot" TEXT,
    "status" TEXT,
    "expiration_date" TIMESTAMPTZ(0),
    "metadata" JSONB,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reagent_pkey" PRIMARY KEY ("id")
);
