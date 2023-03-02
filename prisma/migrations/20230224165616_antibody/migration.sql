-- CreateTable
CREATE TABLE "Antibody" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "vendor" TEXT,
    "cat" TEXT,
    "target" TEXT,
    "lot" TEXT,
    "status" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Antibody_pkey" PRIMARY KEY ("id")
);
