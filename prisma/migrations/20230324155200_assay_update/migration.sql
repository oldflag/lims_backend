-- AlterTable
ALTER TABLE "Assay" ALTER COLUMN "numOfNuclei" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Collaborator" ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMPTZ(0);
