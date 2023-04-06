/*
  Warnings:

  - You are about to drop the column `process_date` on the `Sample` table. All the data in the column will be lost.
  - You are about to drop the column `process_method` on the `Sample` table. All the data in the column will be lost.
  - Added the required column `projectId` to the `Specimen` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sample" DROP COLUMN "process_date",
DROP COLUMN "process_method";

-- AlterTable
ALTER TABLE "Specimen" ADD COLUMN     "projectId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Specimen" ADD CONSTRAINT "Specimen_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
