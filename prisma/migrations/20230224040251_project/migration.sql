-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "status" TEXT,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,
    "collaboratorId" TEXT,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_collaboratorId_fkey" FOREIGN KEY ("collaboratorId") REFERENCES "Collaborator"("id") ON DELETE SET NULL ON UPDATE CASCADE;
