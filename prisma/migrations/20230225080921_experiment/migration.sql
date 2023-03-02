-- CreateTable
CREATE TABLE "Experiment" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "short_description" TEXT,
    "long_description" TEXT,
    "priority" TEXT,
    "status" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "projectId" TEXT,

    CONSTRAINT "Experiment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Experiment" ADD CONSTRAINT "Experiment_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
