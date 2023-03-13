/*
  Warnings:

  - You are about to drop the column `name` on the `I5Primer` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `I7Primer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "I5Primer" DROP COLUMN "name";

-- AlterTable
ALTER TABLE "I7Primer" DROP COLUMN "name";
