/*
  Warnings:

  - You are about to drop the column `loadPatn5Id` on the `Assay` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Assay" DROP CONSTRAINT "Assay_loadPatn5Id_fkey";

-- AlterTable
ALTER TABLE "Assay" DROP COLUMN "loadPatn5Id",
ADD COLUMN     "loadPatn5Name" TEXT;
