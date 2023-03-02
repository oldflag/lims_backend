-- CreateTable
CREATE TABLE "Donor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" TEXT,
    "sex" TEXT,
    "ancestry" TEXT,
    "species" TEXT,
    "status" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,
    "collaboratorId" TEXT NOT NULL,

    CONSTRAINT "Donor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Donor_collaboratorId_key" ON "Donor"("collaboratorId");

-- AddForeignKey
ALTER TABLE "Donor" ADD CONSTRAINT "Donor_collaboratorId_fkey" FOREIGN KEY ("collaboratorId") REFERENCES "Collaborator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
